import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <Header />
      <main>
        <h3
          style={{
            textAlign: "center",
            marginTop: "50px",
            color: "white",
            paddingBottom: "10px",
            borderBottom: "2px solid white",
            width: "200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          CHOOSE CATEGORY
        </h3>

        <section
          style={{
            display: "flex",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className="box1 boxtext">Finance</div>
          <div className="box2 boxtext">Health</div>
          <div className="box3 boxtext">Education</div>
          <div className="box4 boxtext">Career</div>
          <div className="box5 boxtext">Family</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
