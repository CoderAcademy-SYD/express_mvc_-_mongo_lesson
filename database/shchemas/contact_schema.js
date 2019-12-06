// Mongo creates its models via a schema
const mongoose = require('mongoose') // We need to bring in mongoose
const Schema = mongoose.Schema // Pull schema off of mongoose. (capitalised becaue its returning a class)

// Create a new schema. Takes a config object
const ContactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

// exports out the schema
// However it is not a model just yet.
// Mongo docs suggect we turn the schemas into a model immediately in the same file.
// We are going to do it in a different file because some schemas will not be turned into a model so we know which is which

module.exports = ContactSchema
