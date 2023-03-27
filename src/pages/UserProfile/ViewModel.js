import { doc, getDoc } from "firebase/firestore";
import { useAuthValue } from "../../AuthContext";
import { db } from "../../firebaseConfig";
import { useState } from "react";

const UserProfileModel = ()=> {
  const { currentUser } = useAuthValue();
  const [userBio, setBio] = useState();

  const displayName = currentUser ? currentUser.displayName : ''
  const userEmail = currentUser ? currentUser.email : ''

  async function getBio() {
    const docRef = doc(db, "users", currentUser.uid);
    const docSnap = await getDoc(docRef);

    const data = docSnap.exists() ? docSnap.data() : null;
    const bio = data.bio;

    setBio(bio);
  }

  return {
    getBio,
    userBio,
    displayName,
    userEmail
  }
}

export { UserProfileModel };
