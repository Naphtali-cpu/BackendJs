// Logic for importing all libraries
const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000

// demo database
const TODO_DATABASE = [{
    id: 1,
    task: 'Make a button'
}]

// The middlewares
app.use(cors())
app.use(express.json())

// Endpoints

app.get('/api/v1/', (req, res) => {
    res.send('Hello World!')
})

// Starting up the server

app.listen(port, () => {
    console.log('App listening on port $(port)')
})

// Post method endpoint
app.post('/api/v1/', (req, res) => {
    const { task }= req.body

    const newData = {
        id: TODO_DATABASE.length + 1,
        task
    }

    TODO_DATABASE.push(newData)
    return res.json(TODO_DATABASE)
})

// Delete method endpoint
app.delete('/api/v1/:id', (req, res) => {
    const { id } = req.params;

    const deletedIndex = TODO_DATABASE.findIndex(item => item.id == id);

    TODO_DATABASE.splice(deletedIndex, 1);
    return res.json(TODO_DATABASE)
})

// Put method endpoint
app.put('/api/v1/:id', (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    const updateIndex = TODO_DATABASE.findIndex(item => item.id == id);

    TODO_DATABASE[updateIndex].task = task
    return res.json(TODO_DATABASE)
})
