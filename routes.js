// Express has a router built into it! It uses it as soon as it sees a route. We need to require it in first.
const express = require('express') // This is the framework we are using to build the server
const router = express.Router() // This is the above mentioned router

// This is an empty array that will be our pseudo database until we hook up mongo
const contacts = []

// Below are the routes
// The pattern is as follows
// app.<verb>('route', (req, res)=> {})

// All we have to do to make use of it is to replace 'app.' with 'router.'

router.get('/contacts', (req, res) => {
  res.render('contacts/index', { contacts }) // Sending the data contacts to 'contacts/index' similar to the '@'in ruby
})

// Where we send all of our data
router.post('/contacts', (req, res) => {
  let { name, email } = req.body // Destructure name and email off req.body
  let contact = { name, email } // make contact a variale which holds an object of the name and email
  contacts.push(contact) // Push the contact to the array
  res.redirect('/contacts') // Redirect the user to '/contacts' to see the list of cantacts
})

router.get('/contacts/new', (req, res) => {
  res.render('contacts/form') // the response is to render the contact form
})

module.exports = router // export the router so it is avalible in app.js
