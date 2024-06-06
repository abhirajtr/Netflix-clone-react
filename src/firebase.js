import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from 'react-toastify';

const firebaseConfig = {
    apiKey: "AIzaSyB2kOPVK4BpD6Ja0NmhqkjLV8D4PqSobwo",
    authDomain: "netflix-clone-8ab7d.firebaseapp.com",
    projectId: "netflix-clone-8ab7d",
    storageBucket: "netflix-clone-8ab7d.appspot.com",
    messagingSenderId: "235444649201",
    appId: "1:235444649201:web:ce64231d389c692b8efd50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
        console.log("User signed up and added to Firestore:", user);
    } catch (error) {
        console.log(error.code);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const login = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log(res);
    } catch (error) {
        console.log(error.message);
        toast.error(error.code.split('/')[1].split('-').join(' '));
        // alert(error);
    }
}

const logout = async () => {
    signOut(auth);
}

export { auth, db, login, signUp, logout };