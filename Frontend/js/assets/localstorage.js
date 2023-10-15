//usuario
const addUserLocal  = (id, name)=>{
    const user = {
        'name': name,
        'id': id
    }
    localStorage.setItem('user', JSON.stringify(user))
}


    
export {addUserLocal}