const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const PORT = 8000


let people = {
    'stephen':{

        'age':28,
        'name':'stephen',
        'birthLocation':'nairobi'
    },
    'kihuni':{
       
        'age':30,
        'name':'kihuni',
        'birthLocation':'nairobi' 
    },
    'mike':{
        
        'age':27,
        'name':'mike',
        'birthLocation':'nairobi'
    },
    'unknown':{
        'age': 'unknown',
        'name': 'unknown',
        'birthLocation':'nairobi' 
    }

}

app.get('/', (req,res) =>{
 res.sendFile(__dirname + '/index.html')
})

app.get('/api/people/:peopleName', (req,res)=>{
    const peopleName = req.params.peopleName
    console.log(peopleName)
    res.json(people[peopleName])
})

app.listen(PORT, ()=>{
    console.log(`Server running on port${PORT}`)
})