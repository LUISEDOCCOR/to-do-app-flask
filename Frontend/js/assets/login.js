import {addUserLocal} from './localstorage.js'
const apiLogin = (name, password, alert)=>{

    const h2UserName = document.querySelector("#h2UserName");
    const containerForm = document.querySelector('#loginSignup')
    const user = {
        'name': name,
        'password': password
    }
    fetch('http://127.0.0.1:4000/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'        
        },
        body:JSON.stringify(user)

        })
        .then(res => res.json())
        .then(res => {
            if(res.mode != 'danger'){
                alert(res.msg, res.mode)
                addUserLocal(res.id, name)
                h2UserName.innerHTML = name
                containerForm.classList.add('d-none')
            }else{
                alert(res.msg, res.mode)
            }
        })        

}


export {apiLogin}