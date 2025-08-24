import React, { useContext, useState, createContext, useEffect } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const verify = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return verify;
  }, [auth]);

  //Google signUp
  async function signInWithGoogle(auth, googleProvider) {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("signedup with Google");
    } catch (error) {
      console.error(error);
    }
  }

  //Email/password signup
  //SignUp user
  async function signUpWithEmailAndPassword(auth, email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(`signedup user: ${email}`);
    } catch (error) {
      console.error(error);
    }
  }

  //Email/Password sigIn
  async function logInWithEmailAndPassword(auth, email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(`signedIn user: ${email}`);
    } catch (error) {
      console.error(error);
    }
  }

  //Logout
  async function logOut(auth) {
    try {
      await signOut(auth);
      console.log("User signedOut");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signInWithGoogle,
        signUpWithEmailAndPassword,
        currentUser,
        setCurrentUser,
        isLoading,
        setIsLoading,
        setCurrentUser,
        logInWithEmailAndPassword,
        logOut,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
