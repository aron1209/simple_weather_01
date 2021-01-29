import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        height: "80px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h1 style={{ margin: "0" }}>this is Weather site</h1>
    </header>
  );
};

export default Header;
