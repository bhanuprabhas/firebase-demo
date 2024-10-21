// src/App.js
import React from "react";
import UserProfileForm from "./components/UserProfileForm";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div>
      <UserProfileForm />
      <UserList />
    </div>
  );
};

export default App;
