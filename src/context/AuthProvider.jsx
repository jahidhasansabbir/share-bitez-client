import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading]= useState(true)
    const [user, setUser] = useState(null)
    const register = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile =(data)=>{
        return updateProfile(auth.currentUser, {displayName:data.name, photoURL:data.photoUrl})
    }
    const logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
        return signOut(auth)
    }
    const userGoogleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setIsLoading(false)
            if(currentUser?.email){
                axios.post(`${import.meta.env.VITE_server}/jwt`, {email:currentUser.email}, {withCredentials: true})
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err))
            }
        })
        return ()=>unsubscribe()
    },[])
    const userInfo={
        register,
        updateUserProfile,
        user,
        logOut,
        userGoogleSignIn,
        logInUser,
        isLoading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;