import React, { useContext, useState, createContext, useEffect } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [googleError, setGoogleError] = useState();

  useEffect(() => {
    const verify = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return verify;
  }, []);

  //Error handling function

  function handleAuthError(error, setError) {
    console.error(error);
    switch (error.code) {
      case "auth/network-request-failed":
        setError("Please check your network connection");
        break;
      case "auth/email-already-in-use":
        setError("This email is already registered");
        break;
      case "auth/weak-password":
        setError("Password should be at least 6 characters");
        break;
      case "auth/invalid-credential":
        setError("Invalid email or password");
        break;
      default:
        setError("Something went wrong. Try again");
    }
  }

  //Google signUp
  async function signInWithGoogle(auth, googleProvider) {
    setSignUpError("");
    setLoginError("");
    try {
      setIsLoading(true);
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      handleAuthError(error, setGoogleError);
    } finally {
      setIsLoading(false);
    }
  }

  //Email/password signup

  async function signUpWithEmailAndPassword(auth, name, email, password) {
    setGoogleError("");
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setIsLoading(true);
      await updateProfile(credential.user, {
        displayName: name,
      });

      return credential;
    } catch (error) {
      setGoogleError("");
      handleAuthError(error, setSignUpError);
    } finally {
      setIsLoading(false);
    }
  }

  //Email/Password sigIn
  async function logInWithEmailAndPassword(auth, email, password) {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setGoogleError("");

      handleAuthError(error, setLoginError);
    } finally {
      setIsLoading(false);
    }
  }

  //Logout
  async function logOut(auth) {
    setGoogleError("");
    try {
      await signOut(auth);
      console.log("User signedOut");
    } catch (error) {
      handleAuthError(error, setGoogleError);
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
        logInWithEmailAndPassword,
        logOut,
        signUpError,
        setSignUpError,
        setLoginError,
        loginError,
        googleError,
        setGoogleError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
