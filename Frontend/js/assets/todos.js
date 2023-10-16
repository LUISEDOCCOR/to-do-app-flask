const divToDo = document.querySelector("#view-to-do");
const getkey = ()=>{
    var index = localStorage.length 
    index++
    return index 
}
const renderCards = (name, activity, key)=>{
    const card = document.createElement('div')
    card.id = key
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${activity}</p>
            <a href="#" data-key="${key}" class="card-link btn-remove">Eliminar/Completar</a>
            <a href="#" class="card-link">Edit</a>
        </div>
    </div>
    `
    divToDo.appendChild(card)
}
const completeRemove = (key)=>{
    document.getElementById(key).remove()
    localStorage.removeItem(key)
    console.log(key)
}
const openRenderCadrs = () =>{
    if(!localStorage.getItem('user')){
        if(localStorage.length > 0){
            for(let i = 0; i < localStorage.length; i++){
                const key = localStorage.key(i) //recolectamos la key que esta en la posicion i
                const toDo = JSON.parse(localStorage.getItem(key))
                renderCards(toDo.title, toDo.activity, key)
            }
        }
    }
}
const addToDo = (title, activity, alert)=>{
    if(!localStorage.getItem('user')){
        const key = getkey()

        const toDO = {
            'title': title,
            'activity': activity
        }

        localStorage.setItem(key, JSON.stringify(toDO))
        renderCards(title, activity, key)
        
    }
}
openRenderCadrs()

divToDo.addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn-remove')){
        e.preventDefault();
        const key = e.target.getAttribute('data-key');
        completeRemove(key);
    }
})

export {addToDo}