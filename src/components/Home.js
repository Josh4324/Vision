import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <Header />
      <main>
        <div
          style={{
            width: "80%",
            height: "400px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "50px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <div
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              paddingTop: "60px",
            }}
          >
            <div>Vision Board helps you visualize your goals.</div>
            <div>To achieve it, you have to</div>
            <div>GO FOR IT!</div>
          </div>
        </div>

        <h3
          style={{
            textAlign: "center",
            marginTop: "60px",
            fontSize: "24px",
            color: "white",
          }}
        >
          Why do you need a vision board?
        </h3>

        <div
          style={{
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="imgBlock">
            <span
              style={{
                display: "block",
                marginTop: "50px",
                marginLeft: "170px",
                color: "red",
                fontSize: "bold",
              }}
            >
              1.
            </span>
            <div
              style={{
                width: "150px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "30px",
                color: "red",
                fontSize: "bold",
              }}
            >
              Writing down your goals is powerful. it makes you think deeper
              about what you want
            </div>
          </div>
          <div className="imgBlock">
            <span
              style={{
                display: "block",
                marginTop: "50px",
                marginLeft: "170px",
                color: "red",
                fontSize: "bold",
              }}
            >
              2.
            </span>
            <div
              style={{
                width: "150px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "30px",
                color: "red",
                fontSize: "bold",
              }}
            >
              It helps you set realistic goals and measure your goals
            </div>
          </div>
          <div className="imgBlock">
            <span
              style={{
                display: "block",
                marginTop: "50px",
                marginLeft: "170px",
                color: "red",
                fontSize: "bold",
              }}
            >
              3.
            </span>
            <div
              style={{
                width: "150px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "30px",
                color: "red",
                fontSize: "bold",
              }}
            >
              It acts as your daily reminder and you can evaluate your actions
            </div>
          </div>
        </div>

        <Link
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
            textAlign: "center",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "50px",
            width: "250px",
          }}
          to="/board"
          className="boardLink"
        >
          CREATE YOUR VISION BOARD
        </Link>
      </main>
      <Footer />
    </div>
  );
}
