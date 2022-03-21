document.querySelector('button').addEventListener('click', getDetails)

async function getDetails(){
    try{
        const res = await fetch('http://localhost:8000/api/people')
        const data = await res.json()
        document.querySelector('input').innerText
    }catch(err){
        console.log(err)
        
    }
}