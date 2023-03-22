/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "schemaPath": "./schema.graphql",
    "watchSchema": {
        "url": "https://mock.shop/api"
    },
    "plugins": {
        "houdini-svelte": {}
    },
    scalars: {
        // the name of the scalar we are configuring
        URL: {
            // the corresponding typescript type
            type: 'String',
            // turn the api's response into that type
            unmarshal(val) {
                return val
            },
            // turn the value into something the API can use
            marshal(val) {
                return val
            }
        },
        Decimal: {
            type: 'Object',
            // turn the api's response into that type
            unmarshal(val) {
                return val
            },
            // turn the value into something the API can use
            marshal(val) {
                return val
            }
        }
    }
}

export default config
