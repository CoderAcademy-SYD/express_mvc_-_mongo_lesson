// This is an empty array that will be our pseudo database until we hook up mongo
// It needed to move so the the routes will be in the same scope
const contacts = []

let index = (req, res) => {
  res.render('contacts/index', { contacts }) // Sending the data contacts to 'contacts/index' similar to the '@'in ruby
}

// Where we send all of our data
let create = (req, res) => {
  let { name, email } = req.body // Destructure name and email off req.body
  let contact = { name, email } // make contact a variale which holds an object of the name and email
  contacts.push(contact) // Push the contact to the array
  res.redirect('/contacts') // Redirect the user to '/contacts' to see the list of cantacts
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
