import { json } from 'body-parser';
import { response } from 'express';
import {checkForlink} from './Checkerforlink'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('name').value
    const output = document.getElementById('results');



    if(checkForlink(formText)){
        output.innerHTML = 'loading';

        fetch(`http://localhost:8080/runner?url=${formText}`)
          .then(jsondata=>{
              return response.json()
          })
          .then(response=>{

          })
          .catch(wrong=>console.log(erorooro))

    }else{
        output.innerHTML='not url'

    }

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
