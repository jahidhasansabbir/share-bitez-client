import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const register = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile =(data)=>{
        return updateProfile(auth.currentUser, {displayName:data.name, photoURL:data.photoUrl})
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return ()=>unsubscribe()
    },[])
    const logOut =()=>{
        return signOut(auth)
    }
    const userGoogleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }
    const userInfo={
        register,
        updateUserProfile,
        user,
        logOut,
        userGoogleSignIn
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;