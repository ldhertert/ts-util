/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLClient } from "../net/graphql-client"
import { createQueryInputTypes, proecessJsonSchema } from "./generate-json-schema"
import { generateQueries } from "./generate-graphql-queries"
import { generateTypesFromJSONSchema } from "./generate-sdks"

type Operation = {
    [key: string]: any
}

export async function CodeGen(client: GraphQLClient, typeName: string): Promise<any> {
    const introspectionResult = await client.getIntrospectionResult()
    let jsonSchema = await client.getJsonSchema()
    jsonSchema = createQueryInputTypes(jsonSchema)

    const queries = await generateQueries(client)
    const processed = await proecessJsonSchema(jsonSchema)
    const combined = Object.keys(processed.queries).map(key => {
        const querySchemas = processed.queries[key]
        const queryDetails = queries.find(q => q.name === key)
        return {
            ...queryDetails,
            inputSchema: querySchemas.input,
            resultSchema: querySchemas.output
        }
    })

    const typescriptTypes = await generateTypesFromJSONSchema('typescript', typeName, JSON.stringify(jsonSchema))
    const goTypes = await generateTypesFromJSONSchema('go', typeName, JSON.stringify(jsonSchema))

    // put it all together in an importable way
    const operations: Operation = {}
    combined.forEach(op => {
        const query = op as any
        operations[query.name] = query
    })

    const fileBody = `export const Operations = ${JSON.stringify(operations, null, 4)}`

    return {
        schema: {
            introspection: introspectionResult,
            jsonSchema: jsonSchema,
            processedSchema: processed
        },
        queries: queries,
        types: {
            operations: fileBody,
            typescript: typescriptTypes,
            go: goTypes
        }
    }
}