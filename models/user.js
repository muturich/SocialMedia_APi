// Require the Schema and model objects from the Mongoose package.
const { Schema, model } = require("mongoose");

// Define the user schema, which specifies the structure and behavior of the user data model.
const userSchema = new Schema({
    

    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    
    // Define the email field, which is a required string and must match a regular expression for email validation.
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Your email was Wrong,please enter a valid email address",]
    },
    
    // Define the thoughts field as an array of object IDs referencing the "Thought" model.
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought"
        },
    ],
    
    // Define the friends field as an array of object IDs referencing the "User" model.
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    ]
}, {
    // Define the schema options, which include virtual fields and disabling the ID field.
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// Create a virtual field called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

// Create the user model using the userSchema.
const User = model("User", userSchema);

// Export the user model to make it available to other modules.
module.exports = User;