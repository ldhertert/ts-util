/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLClient } from '../net/graphql-client'

type JSONSchema = any

type OperationInfo = {
    [key: string]: {
        input: JSONSchema
        output: JSONSchema
    }
}

export interface GraphQLClientData {
    queries: OperationInfo
    mutations: OperationInfo
    types: JSONSchema
}

export async function generateJsonSchema(accountId: string, apiKey: string): Promise<any> {
    const client = new GraphQLClient('https://app.harness.io/gateway/api/graphql', {
        params: {
            accountId: accountId
        },
        headers: {
            'x-api-key': apiKey
        }
    })

    const schema = await client.getJsonSchema()
    createQueryInputTypes(schema)

    return schema
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createQueryInputTypes(schema: any): any {
     // populate querys with inputs and outputs
     Object.keys(schema.properties.Query.properties).forEach(key => {
         const query = schema.properties.Query.properties[key]

        // move query arguments to their own type in definitions
        schema.definitions[key + 'Input'] = query.properties.arguments

        // Create JSON schema for new input object type
        schema.properties.Query.properties[key].properties = {
            input: {
                type: "object",
                "$ref": `#/definitions/${key}Input`,
            },
            output: schema.properties.Query.properties[key].properties.return
        }
    })

    return schema
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function proecessJsonSchema(schema: any): Promise<GraphQLClientData> {

    // Create  new object to hold schemas in a compact manner
    const resources: GraphQLClientData = {
        queries: {},
        mutations: {},
        types: {
            "$id": 'harness.definitions',
            type: 'object',
            definitions: schema.definitions
        }
    }

    // populate querys with inputs and outputs
    Object.keys(schema.properties.Query.properties).forEach(key => {
        try {
        resources.queries[key] = {
            input: schema.properties.Query.properties[key].properties.arguments,
            output: schema.properties.Query.properties[key].properties.return
        }
        } catch (e) {
            throw new Error(JSON.stringify(schema.properties.Query.properties[key], null, 4))
        }
    })

    // populate mutations with inputs and outputs
    Object.keys(schema.properties.Mutation.properties).forEach(key => {
        resources.mutations[key] = {
            input: schema.properties.Mutation.properties[key].properties.input,
            output: schema.properties.Mutation.properties[key].properties.return
        }
    })

    // Replace all references to definitions with a fully qualified path so they can live across schemas
    let inputString = JSON.stringify(resources.queries)
    inputString = inputString.replace(/#\/definitions/g, resources.types["$id"] + '#/definitions')
    resources.queries = JSON.parse(inputString)

    inputString = JSON.stringify(resources.mutations)
    inputString = inputString.replace(/#\/definitions/g, resources.types["$id"] + '#/definitions')
    resources.mutations = JSON.parse(inputString)

    return resources
}
