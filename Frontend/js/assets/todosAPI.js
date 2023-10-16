const divToDo = document.querySelector("#view-to-do");
const apiViewToDo = (renderCard)=>{
    const localUser = JSON.parse(localStorage.getItem('user'))
    fetch('http://127.0.0.1:4000/viewtodos', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'user_id': localUser.id
        })
    })
    .then(res  => res.json())
    .then(todos => {
        console.log(todos)
        for(var i in todos){
            renderCard(todos[i].title, todos[i].activity, todos[i].id)
        }
    })
}

const apiAddToDo = (title, activity, renderCard)=>{
    const localUser = JSON.parse(localStorage.getItem('user'))
    const toDo = {
        'title': title,
        'activity': activity,
        'user_id': localUser.id
    }
    fetch('http://127.0.0.1:4000/addToDo',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toDo)
    })
    renderCard(title, activity, localUser.id)
    
}

const apiDeleteToDo = (id) =>{
    fetch('http://127.0.0.1:4000/delete',{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'todo_id': id
        })
    })
}

export {apiAddToDo, apiViewToDo, apiDeleteToDo}