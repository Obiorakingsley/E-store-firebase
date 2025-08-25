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
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [signUpError, setSignUpError] = useState("");
  const [loginError, setLoginError] = useState("");

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
    } catch (error) {
      if (error.code == "auth/network-request-failed") {
        return setSignUpError("Please check your network connection");
      } else if (error.code == "auth/email-already-in-use") {
        return setSignUpError("This email is already registered");
      } else if (error.code == "auth/weak-password") {
        return setSignUpError("Password should be at least 6 characters");
      }
      return setSignUpError("Faild to sign up. Try again");
    }
  }

  //Email/Password sigIn
  async function logInWithEmailAndPassword(auth, email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(`signedIn user: ${email}`);
    } catch (error) {
      console.error(error);
      if (error.code == "auth/invalid-credential") {
        return setLoginError("Invalid credential");
      } else if (error.code == "auth/network-request-failed") {
        return setLoginError("Please check your network connection");
      }
      return setLoginError("Faild to login. Try again");
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
        signUpError,
        setSignUpError,
        setLoginError,
        loginError,
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
