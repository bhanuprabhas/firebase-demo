// src/components/UserProfileForm.js
import React, { useState } from "react";
import { db } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore"; // Firestore functions

const UserProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Add user data to the "users" collection
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: email
      });
      alert(`User added with ID: ${docRef.id}`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <h2>Submit Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserProfileForm;
