// Express has a router built into it! It uses it as soon as it sees a route. We need to require it in first.
const express = require('express') // This is the framework we are using to build the server
const router = express.Router() // This is the above mentioned router
const ContactsController = require('./controllers/contact_controller')

// Below are the routes
// The pattern is as follows
// app.<verb>('route', <controller.function>)
// When we split up routes and the app we must
// All we have to do to make use of it is to replace 'app.' with 'router.'

router.get('/contacts', ContactsController.index)
router.post('/contacts', ContactsController.create) // Where we send all of our data
router.get('/contacts/new', ContactsController.newResourse)

module.exports = router // export the router so it is avalible in app.js
