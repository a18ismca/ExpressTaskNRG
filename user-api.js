
// Express.js config
const express = require('express')

// Body parser declaration
const bodyParser = require('body-parser')

// CORS Middleware config
const corsMiddleware = require('cors')

const app = express()
const port = 3000

// Create a list of users. This will be used to compare the 
// items stored in the same array
let users = []

app.use(corsMiddleware())

// Body parser middleware config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Send hello world! GET request
app.get('/', (req, res) => {
    res.send('Bok world');
})

// For testing purposes. When clicking on the "Create user" button 
// the user will be directed to localhost:3000/user
// where he/she will be informed that a user has been added to a database.
app.post('/user', (req, res) => {

    const user = req.body
    users.push(user)
    console.log(users)

    
    
    res.send("A user has been added to database!")
})




// Listening on the port. Listen to incoming code. 
app.listen(port, () => console.log(`Listening on port ${port}...`));


//app.get() gets data
//app.post() creates data
//app.put() updates data
//app.delete() delete data. not neccesary for this task.
