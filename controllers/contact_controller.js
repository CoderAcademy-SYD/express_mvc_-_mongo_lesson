const ContactModel = require('../database/models/contact_model') // require in the ContactModel, this is how we will enter data to the db

let index = (req, res) => {
  ContactModel.find() // Find everything in the ContactsModel
    .then(contacts => {
      return res.render('contacts/index', { contacts }) // Sending the data contacts to 'contacts/index' similar to the '@'in ruby
    })
    .catch(err => {
      return res.status(500).send(`Error: ${err}`)
    })
}

// Where we send all of our data
let create = (req, res) => {
  let { name, email, enquiry } = req.body // Destructure name and email off req.body
  let contact = { name, email, enquiry } // make contact a variale which holds an object of the name and email
  ContactModel.create(contact) // Create a new contact in the db with the object we passed in. returns a promise
    .then(() => res.redirect('/contacts')) // Redirect the user to '/contacts' to see the list of cantacts
    .catch(err => res.status(500).send(`Error`, `${err}`)) // 500 = internal error, send back the error
}

// 'new' is a reserved word in JS. Therefore we chose newResourse so it will be generic and reuseable

let newResourse = (req, res) => {
  res.render('contacts/form') // the response is to render the contact form
}

// Exporting the functions so they can be avalible in the routes

module.exports = {
  index,
  create,
  newResourse
}
