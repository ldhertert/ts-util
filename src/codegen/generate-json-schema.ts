import { SchemaGenerator, BaseType, Definition, FunctionType, SubTypeFormatter, createFormatter, createProgram, createParser } from "ts-json-schema-generator";
import * as fs from 'fs';

export class MyFunctionTypeFormatter implements SubTypeFormatter {
    public supportsType(type: FunctionType): boolean {
        return type instanceof FunctionType;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public getDefinition(_type: FunctionType): Definition {
        // Return a custom schema for the function property.
        return {
            type: "object",
            properties: {
                isFunction: {
                    type: "boolean",
                    const: true,
                },
            },
        };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public getChildren(_type: FunctionType): BaseType[] {
        return [];
    }
}

const config = {
    path: "./src/**/http-client.ts",
    tsconfig: "./tsconfig.build.json",
    type: "*"
};

try {
    // We configure the formatter an add our custom formatter to it.
    const formatter = createFormatter(config, (fmt) => {
        fmt.addTypeFormatter(new MyFunctionTypeFormatter());
    });

    const program = createProgram(config);
    const parser = createParser(program, config);
    const generator = new SchemaGenerator(program, parser, formatter, config);
    const schema = generator.createSchema(config.type);
    const schemaString = JSON.stringify(schema, null, 4);
    console.log(schemaString)
    fs.writeFileSync('./dist/json-schema.json', schemaString)
} catch (e) {
    console.error(e)
}