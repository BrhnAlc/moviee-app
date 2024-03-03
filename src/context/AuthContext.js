import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut, updateProfile } from "firebase/auth";
import { auth } from './../auth/firebase';
import {  useNavigate } from 'react-router-dom';
import { toastErrorNotify, toastSuccessNotify } from '../helpers/ToastNotify';
import { useEffect } from 'react';
 

export const AuthContext =createContext();



const AuthContextProvider = ({children}) => {
  const [currentUser, setcurrentUser] = useState(false)
  let navigate =useNavigate();

  useEffect(()=>{
    userObserver();
  } , [])
    const createUser=async(email,password,displayName)=>{
        
        try {
          let userCredential=  await createUserWithEmailAndPassword(  
          auth,
          email,
          password
          ) ;
          //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName: displayName
        //* key ve value değerleri aynı ise sadece key değerini yazabiliriz
        
      });
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
   
  const logOut=()=>{
    signOut(auth)
    toastSuccessNotify("Logged out succesfully!")
  };

  const userObserver=()=>{
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth,(user)=>{
    if(user){
      const {email,displayName,phoURL}=user
      setcurrentUser( {email,displayName,phoURL});
          console.log(user);
    }else{
      setcurrentUser(false)
     console.log("logged out");
    }
    })
  }

    const values={createUser,signIn,logOut,currentUser}
  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider;