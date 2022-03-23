document.querySelector('button').addEventListener('click', getDetails)

async function getDetails(){
    try{
        const res = await fetch('http://localhost:8000/api/people/id')
        const data = await res.json()
    }catch(err){
        console.log(err)
        
    }
}