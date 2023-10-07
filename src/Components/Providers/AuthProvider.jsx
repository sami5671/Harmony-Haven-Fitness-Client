import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

// create an instance of Google AuthProvider================================
const googleProvider = new GoogleAuthProvider();
// =================================================================
const AuthProvider = ({ children }) => {
  //   ===================State handle for monitoring the user is signIn or out=================
  const [user, setUser] = useState(null);
  // ==================Create User========================================================
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   ==================Sign in User================================================
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   =================Google sign =================================================
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //   =================Sign out user===============================================================
  const logout = () => {
    signOut(auth);
  };
  // =============================================================================================

  //   =================Checking the user is Sign in Or not===============================================
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userParameter) => {
      setUser(userParameter);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // ==============sending value to the context =============================
  const authInfo = {
    user,
    createUser,
    signInUser,
    signInWithGoogle,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
