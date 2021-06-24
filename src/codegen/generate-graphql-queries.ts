/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLClient } from "../net/graphql-client";
import { gql } from 'graphql-tag'
import { DocumentNode } from "graphql";
import { print } from 'graphql/language/printer'

interface Query {
    name: string
    description?: string
    type: string
    args: QueryArgs[]
    paginated: boolean
    mutation: boolean
    body?: string
    documentNode?: DocumentNode
}

interface QueryArgs {
    name: string
    description?: string
    type: string
}

export async function generateQueries(client: GraphQLClient): Promise<Query[]> {
    const queries = await parseQueryInfoFromIntrospection(client)
    await enhanceMetadata(queries)
    queries.forEach(q => {
        const queryBody = render(q)
        q.documentNode = queryBody
        q.body = print(queryBody)
    })
    return queries
}

async function parseQueryInfoFromIntrospection(client: GraphQLClient): Promise<Query[]> {

    const schema = await client.getIntrospectionResult()
    const queries: Query[] = []
    schema.__schema.types
        .filter(t => t.name === 'Query' || t.name === 'Mutation')
        .forEach(t => {
            (t as any).fields.forEach((q: { name: any; description: any; type: { name: string }; args: any[] }) => {
                queries.push({
                    name: q.name,
                    description: q.description,
                    type: q.type.name,
                    paginated: q.type.name.endsWith('Connection'),
                    args: q.args.map(arg => {
                        return {
                            name: arg.name,
                            description: arg.description,
                            type: getArgTypeString(arg.type)
                        }
                    }),
                    mutation: (t.name === 'Mutation')
                })
            })
        })
    return queries
}

async function enhanceMetadata(queries: Query[]): Promise<Query[]> {
    queries.forEach(query => {
        query.args.filter(arg => arg.name === 'limit').forEach(arg => {
            arg.type = arg.type.replace('!', ' = 100')
        })

        query.args.filter(arg => arg.name === 'offset').forEach(arg => {
            arg.type += ' = 0'
        })
    })
    return queries
}

function render(query: Query): DocumentNode {
    const args1 = query.args.map(arg => `$${arg.name}: ${arg.type}`).join(', ')
    const args2 = query.args.map(arg => `${arg.name}: $${arg.name}`).join(', ')

    if (query.mutation) {
        return gql`
            mutation ${query.name}(${args1}) {
                result: ${query.name}(${args2}) {
                    resource: something {
                        id
                        name
                    }
                }
            }`
    } else {
        const resourceFields = `
            id
            name`

        const arrayFields = `
            nodes {
                id
                name
            }

            pageInfo {
                hasMore
                total
            }
        `
        return gql`
            query ${query.name}(${args1}) {
                result: ${query.name}(${args2}) {
                    ${query.paginated ? arrayFields : resourceFields}
                }
            }`
    }
}

function getArgTypeString(type: any) {
    let required = false
    let isArray = false

    let effectiveType = type
    if (effectiveType.kind === 'NON_NULL') {
        required = true
        effectiveType = effectiveType.ofType
    }

    if (effectiveType.kind === 'LIST') {
        isArray = true
        effectiveType = effectiveType.ofType
    }

    let result = effectiveType.name
    if (required) {
        result += '!'
    }

    if (isArray) {
        result = `[${result}]`
    }
    return result
}