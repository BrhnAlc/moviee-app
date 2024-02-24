import React, { createContext } from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from './../auth/firebase';
import {  useNavigate } from 'react-router-dom';
import { toastErrorNotify, toastSuccessNotify } from '../helpers/ToastNotify';
  

export const AuthContext =createContext();



const AuthContextProvider = ({children}) => {
  let navigate =useNavigate();
    const createUser=async(email,password)=>{
        
        try {
          let userCredential=  await createUserWithEmailAndPassword(auth, email, password) ;
          console.log(userCredential);
           navigate("/");
           toastSuccessNotify("Registered successfully!");

        } catch (error) {
           toastErrorNotify(error.message);
        }
    };
        // Email/ password ile girişi enable yapma
    const signIn=async(email,password)=>{
        
      try {
        //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
        let userCredential = await signInWithEmailAndPassword(auth, email, password) ;
         console.log(userCredential);
        navigate("/");
        toastSuccessNotify("Logged in succesfully!")
      } catch (error) {
        toastErrorNotify(error.messages);
      }
  };

    const values={createUser,signIn}
  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider;