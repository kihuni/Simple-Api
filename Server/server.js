const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const PORT = 8000


let people = {
    'stephen':{
         'id': 0,
        'age':28,
        'name':'stephen',
        'birthLocation':'nairobi'
    },
    'kihuni':{
        'id': 1,
        'age':30,
        'name':'kihuni',
        'birthLocation':'nairobi' 
    },
    'mike':{
         'id':2,
        'age':27,
        'name':'mike',
        'birthLocation':'nairobi'
    },
    'unknown':{
        'id':3,
        'age': 'unknown',
        'name': 'unknown',
        'birthLocation':'nairobi' 
    }

}

app.get('/', (req,res) =>{
 res.sendFile(__dirname + '/index.html')
})

app.get('/api/people/:id', (req,res)=>{
    const identity = req.params.id
    const person = people.find(person => person.id == identity)
    res.json(person)
})

app.listen(PORT, ()=>{
    console.log(`Server running on port${PORT}`)
})