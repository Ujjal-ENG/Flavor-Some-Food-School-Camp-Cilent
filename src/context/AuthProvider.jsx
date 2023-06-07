/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import axios from 'axios';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import 'sweetalert2/dist/sweetalert2.css';
import app from '../config/firebase';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function AuthProvider({ children }) {
    const [privateLoad, setPrivateLoad] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    const createUser = (email, password) => {
        setPrivateLoad(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setPrivateLoad(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOutUser = async () => {
        await signOut(auth);
    };

    const singInGoogle = () => {
        return signInWithPopup(auth, provider);
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, async (user) => {
            if (user && user.email) {
                const { data } = await axios.post('http://localhost:8080/jwt', { email: user.email });
                localStorage.setItem('token', data.token);
            } else {
                localStorage.removeItem('token');
            }
            setUserInfo(user);
            setPrivateLoad(false);
        });
        return () => unSubscriber();
    }, []);

    const auths = {
        privateLoad,
        userInfo,
        createUser,
        signInUser,
        logOutUser,
        singInGoogle,
        resetPassword
    };

    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
