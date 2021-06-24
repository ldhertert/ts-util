import { quicktype, JSONSchemaInput, InputData, RendererOptions } from 'quicktype-core'

type Language = 'typescript' | 'go' | 'csharp'

export async function generateTypesFromJSONSchema(targetLanguage: Language, typeName: string, jsonSchemaString: string, rendererOptions?: RendererOptions): Promise<string> {
    const schemaInput = new JSONSchemaInput(undefined);

    await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });

    const inputData = new InputData();
    inputData.addInput(schemaInput);

    const { lines: code } = await quicktype({        
        inputData,
        lang: targetLanguage,
        rendererOptions: rendererOptions
    });

    return code.join("\n")
}