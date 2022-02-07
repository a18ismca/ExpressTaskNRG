
// Express.js config
const express = require('express')
const app = express()
const port = 3000


var person = [{id: "1999", name:"Ismet", salary:"2000"}]

app.get('/persons', (req, res) => {
    res.send(person)
})

//Check if the person exists by checking ID.
app.get('/persons/:id', (req, res) => {
    const getPersonId = person.find(p => p.id === parseInt(req.params.id))
    if (!getPersonId) res.status(404).send("The person with the given ID does not exist.")
    res.send(person)
})

//
app.get('/persons/:id/:name/:salary/:gender', (req, res) => {
    res.send(req.params)
})

// Listening on the port. Listen to incoming code. 
app.listen(port, () => console.log(`Listening on port ${port}...`));


//app.get() gets data. SAFE!
//app.post() creates data.
//app.put() updates data. unsafe.
//app.delete() deletes data. unsafe.
