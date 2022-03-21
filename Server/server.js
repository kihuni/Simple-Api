const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 8000
app.use(cors())

const people = {
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
    }

}

app.get('/', (req,res) =>{
 res.sendFile(__dirname + '/index.html')
})

app.get('/api/people', (req,res)=>{
    res.json(people)
})

app.listen(PORT, ()=>{
    console.log(`Server running on port${PORT}`)
})