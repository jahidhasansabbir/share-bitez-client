export const manageFoodPromise = email=>{
    return fetch(`${import.meta.env.VITE_server}/manage-my-food/${email}`, {
        credentials: 'include'
    }).then(res=> res.json()
    )

}