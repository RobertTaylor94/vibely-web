import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthValue } from "../../AuthContext";
import { updateProfile } from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ViewModel = () => {
    const {currentUser} = useAuthValue()
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value }
        setData({ ...data, ...newInput})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        updateProfile(currentUser, {
            displayName: data.displayName
        }).then(() => {
            console.log(`New displayname: ${currentUser.displayName}`)
        }).catch((error) => {
            console.log(error)
        })

        const dbRef = collection(db, "users")
        const user = {
            displayName: data.displayName,
            bio: data.bio,
            uid: currentUser.uid,
            followers: []
        }

        console.log(user)

        setDoc(doc(db, "users", currentUser.uid), user)
            .then(docRef => {
                console.log("Document added successfully")
                navigate("/profile")
            }).catch(error => {
                console.log("addDoc Error")
                console.log(error)
            })
    }

    return {
        handleInput,
        handleSubmit
    }
}

export {ViewModel};