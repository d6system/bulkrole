module.exports = {
    name: "Text 7x with Boolean",

    description: "Creates 7 texts to use it in your blocks as well as a boolean.",

    category: "Inputs",

    auto_execute: true,

    inputs: [],

    options: [
        {
            "id": "text1",
            "name": "Text 1",
            "description": "Description: The text to set.",
            "type": "TEXT"
        },
        {
            "id": "text2",
            "name": "Text 2",
            "description": "Description: The text to set.",
            "type": "TEXT"
        },
        {
            "id": "text3",
            "name": "Text 3",
            "description": "Description: The text to set.",
            "type": "TEXT"
        },
        {
            "id": "text4",
            "name": "Text 4",
            "description": "Description: The text to set.",
            "type": "TEXT"
        },
        {
            "id": "text5",
            "name": "Text 5",
            "description": "Description: The text to set.",
            "type": "TEXT"
        },
        {
            "id": "text6",
            "name": "Text 6",
            "description": "Description: The text to set.",
            "type": "TEXT"
        },
        {
            "id": "text7",
            "name": "Text 7",
            "description": "Description: The text to set.",
            "type": "TEXT"
        },
        {
            "id": "boolean_type",
            "name": "Boolean Type",
            "description": "Description: The type of boolean to set.",
            "type": "SELECT",
            "options": {
                "true": "True/Yes",
                "false": "False/No"
            }
        }
    ],

    outputs: [
        {
            "id": "text1",
            "name": "Text 1",
            "description": "Type: Text\n\nDescription: The text.",
            "types": ["text"]
        },
        {
            "id": "text2",
            "name": "Text 2",
            "description": "Type: Text\n\nDescription: The text.",
            "types": ["text"]
        },
        {
            "id": "text3",
            "name": "Text 3",
            "description": "Type: Text\n\nDescription: The text.",
            "types": ["text"]
        },
        {
            "id": "text4",
            "name": "Text 4",
            "description": "Type: Text\n\nDescription: The text.",
            "types": ["text"]
        },
        {
            "id": "text5",
            "name": "Text 5",
            "description": "Type: Text\n\nDescription: The text.",
            "types": ["text"]
        },
        {
            "id": "text6",
            "name": "Text 6",
            "description": "Type: Text\n\nDescription: The text.",
            "types": ["text"]
        },
        {
            "id": "text7",
            "name": "Text 7",
            "description": "Type: Text\n\nDescription: The text.",
            "types": ["text"]
        },
        {
            "id": "boolean",
            "name": "Boolean",
            "description": "Type: Boolean\n\nDescription: The boolean.",
            "types": ["boolean"]
        }
    ],

    code(cache) {
        this.StoreOutputValue(this.GetOptionValue("text1", cache), "text1", cache, "inputBlock");
        this.StoreOutputValue(this.GetOptionValue("text2", cache), "text2", cache, "inputBlock");
        this.StoreOutputValue(this.GetOptionValue("text3", cache), "text3", cache, "inputBlock");
        this.StoreOutputValue(this.GetOptionValue("text4", cache), "text4", cache, "inputBlock");
        this.StoreOutputValue(this.GetOptionValue("text5", cache), "text5", cache, "inputBlock");
        this.StoreOutputValue(this.GetOptionValue("text6", cache), "text6", cache, "inputBlock");
        this.StoreOutputValue(this.GetOptionValue("text7", cache), "text7", cache, "inputBlock");
        this.StoreOutputValue(this.GetOptionValue("boolean_type", cache) == "true", "boolean", cache, "inputBlock");
    }
}