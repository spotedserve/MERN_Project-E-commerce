import React from "react";
import { Link } from "react-router-dom";

const navHeader = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: "black",
  color: "white",
};

export const Nav = () => {
  return (
    <>
      <div style={navHeader}>
        <h1>Logo</h1>
        <div style={{ display: "flex", gap: "40px", fontSize: "18px" }}>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Products
          </Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="/add">
            Add Products
          </Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="/update">
            Update Products
          </Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="/logout">
            Logout
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/profile"
          >
            Profile
          </Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="/signup">
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};
