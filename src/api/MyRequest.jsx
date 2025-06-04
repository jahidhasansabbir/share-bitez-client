export const foodPromise = email=>{
    return fetch(`${import.meta.env.VITE_server}/requested-food/${email}`, {
        credentials: 'include'
    }).then(res=>res.json())
}