import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "30px",
        }}
      >
        <div style={{ display: "flex" }}>
          <Link to="/">
            {" "}
            <img style={{ width: "50px" }} src="/images/logo.png" alt="logo" />
          </Link>

          <div
            style={{ paddingLeft: "10px", marginTop: "10px", color: "white" }}
          >
            MY VISION BOARD
          </div>
        </div>
        <Link
          className="boardLink"
          style={{
            textDecoration: "none",
            backgroundColor: "yellow",
            height: "25px",
            paddingTop: "4px",
            paddingLeft: "10px",
            paddingRight: "10px",
            color: "red",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
          to="/board"
        >
          CREATE YOUR VISION BOARD
        </Link>
      </header>
    </div>
  );
}
