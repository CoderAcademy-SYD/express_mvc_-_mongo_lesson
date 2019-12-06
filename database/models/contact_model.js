const mongoose = require('mongoose') // We need to bring in mongoose
const ContactSchema = require('../shchemas/contact_schema') // We need to bring in the ContactSchema because the model will need to use this

const ContactModel = mongoose.model('contact', ContactSchema) // 1st arg = <what collection we are going to use> 2nd arg <the schema the model will be created from>

module.exports = ContactModel
