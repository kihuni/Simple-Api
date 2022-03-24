const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const PORT = 8000


let people = [
    {
        id: 0,
        age:28,
        name:'stephen',
        birthLocation:'nairobi'
    },
    {
        id: 1,
        age:30,
        name:'kihuni',
        birthLocation:'nairobi' 
    },
    {
         id:2,
        age:27,
        name:'mike',
        birthLocation:'nairobi'
    },
    {
        'id':3,
        'age': '40',
        'name': 'manman',
        'birthLocation':'nairobi' 
    }

]

app.get('/', (req,res) =>{
 res.sendFile(__dirname + '/index.html')
})

app.get('/api/people/:id', (req,res)=>{
    const identity = Number(req.params.id)
    console.log(identity)
    const person = people.find(p => {
        console.log(p.id === identity)})

    if(person){
        res.json(person)
    }else {
        res.status(404).end()
    }
    
})

app.post('/api/people', (req,res) =>{
    const person = req.body
    console.log(person)
    res.json(person)
})

app.delete('/api/people/:id', (req,res) =>{
    const identity  = Number(req.params.id)
    people = people.filter(p => p.id !== id)

    res.status(204).end()
})

app.listen(PORT, ()=>{
    console.log(`Server running on port${PORT}`)
})