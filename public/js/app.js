console.log('Client side javascript file')

// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

fetch('http://localhost:3000/weather?address=!').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

const weaatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne= document.querySelector('#message-1')
const messageTwo= document.querySelector('#message-2')

messageOne.textContent='Loading .. '
messageTwo.textContent='' 
weaatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    fetch('/weather?address='+ location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent=data.error
        }else{
            messageOne.textContent=data.location
            messageTwo.textContent=data.forecast
        }
    })
})
})