import React from "react";
import './App.css';
import AuthenticationButton from "./components/authentication-button";



function App() {
  
  return (
    <div className="shadow my-3">
      <hr />
      <h5 className="py-3 px-10 m-1 md:text-xl font-bold">Welcome to User Authentication application...</h5>
      <div className="flex m-2 px-10 py-4">
      <AuthenticationButton />
      </div>
      </div>
  );
}

export default App;
