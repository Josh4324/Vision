import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const goals = JSON.parse(localStorage.getItem("vision"));
  let linkurl;
  if (goals !== null && goals.length === 5) {
    linkurl = "/goals";
  } else {
    linkurl = "/board";
  }
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

          <Link className="link" to="/">
            <div
              style={{ paddingLeft: "10px", marginTop: "10px", color: "white" }}
            >
              MY VISION BOARD
            </div>
          </Link>
        </div>
        <Link
          className="boardLink boardnone"
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
          to={linkurl}
        >
          CREATE YOUR VISION BOARD
        </Link>
      </header>
    </div>
  );
}
