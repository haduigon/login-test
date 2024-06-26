import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbk2oWzNgTEaKBtfbMdSirTR3wfM0c08E",
  authDomain: "login-test-cff45.firebaseapp.com",
  projectId: "login-test-cff45",
  storageBucket: "login-test-cff45.appspot.com",
  messagingSenderId: "478707345021",
  appId: "1:478707345021:web:58c12728f1a5b41c4fb314",
  measurementId: "G-FJ9CM7JS4N",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



const registerWithEmailAndPassword = async (
  email: string,
  password: string
) => {

  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return res;
  } catch (error) {
    return 1;
  }
};

async function logInWithEmailAndPassword(email: string, password: string) {
  
  try {
    const login = await signInWithEmailAndPassword(auth, email, password);
    
    return login;
  } catch (error) {
    return error;
  }
}

function logInWithEmailAndPassword2(email: string, password: string) {
   return signInWithEmailAndPassword(auth, email, password);
 }

async function loginWithGoogle() {
  const login = await signInWithPopup(auth, provider)
  return login;
}

function logout() {
  signOut(auth);
}

function getUserData(user: any) {
  return getAuth();
}

export {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword2,
  logout,
  loginWithGoogle,
  getUserData,
  auth,
};
