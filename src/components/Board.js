import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
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
          <Link className="link" to="/category/finance">
            <div className="box1 boxtext">Finance</div>
          </Link>
          <Link className="link" to="/category/health">
            <div className="box2 boxtext">Health</div>
          </Link>
          <Link className="link" to="/category/education">
            <div className="box3 boxtext">Education</div>
          </Link>
          <Link className="link" to="/category/career">
            <div className="box4 boxtext">Career</div>
          </Link>
          <Link className="link" to="/category/family">
            <div className="box5 boxtext">Family</div>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
