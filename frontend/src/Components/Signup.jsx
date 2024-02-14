import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const inputParent = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",
    height: "500px",
    width: "300px",
    margin: "auto",
  };
  const inputBox = {
    padding: "10px",
    border: "1px solid black",
    fontSize: "14px",
    borderRadius: "4px",
  };

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserNPassword] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async () => {
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    setUserName("");
    setUserEmail("");
    setUserNPassword("");
    Navigate("/");
  };

  return (
    <>
      <div style={inputParent}>
        <h1>Register Now</h1>
        <input
          style={inputBox}
          type="text"
          placeholder="Enter Your Name"
          value={userName}
          onChange={(event) => setUserName(event?.target?.value)}
        />
        <input
          style={inputBox}
          type="email"
          placeholder="Enter Your Email"
          value={userEmail}
          onChange={(event) => setUserEmail(event?.target?.value)}
        />
        <input
          style={inputBox}
          type="password"
          value={userPassword}
          placeholder="Enter Your Password"
          onChange={(event) => setUserNPassword(event?.target?.value)}
        />
        <button style={inputBox} onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </>
  );
};
