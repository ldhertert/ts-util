import Ajv2019, { JSONSchemaType } from "ajv/dist/2019"

const ajv = new Ajv2019({
    code: {
        source: true
    }
})

// ajv.addSchema(resources.types)
// const validate = ajv.compile(resources.queries.applicationByName.output)

// const validData = {
//     name: 1,
//     environments: []
// }

// if (validate(validData)) {
//     console.log(validData.name)
// } else {
//     console.log(validate.errors)
// }