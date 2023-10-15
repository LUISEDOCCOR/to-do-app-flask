import {addUserLocal} from './localstorage.js'
const apiSingUp = (name, password, alert)=>{
    const h2UserName = document.querySelector("#h2UserName");
    const containerForm = document.querySelector('#loginSignup')
    const user = {
        "name":  name,
        "password": password
    }
    fetch('http://127.0.0.1:4000/signup',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'        
        },
        body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
        alert(res.msg, res.mode)
        if(res.mode == 'success'){
            h2UserName.innerHTML = name
            containerForm.classList.add('d-none')
            addUserLocal(res.id, name)
        }
    })
}

export {apiSingUp}