import React from "react";
import { Link } from "react-router-dom";

export default function Education() {
  return (
    <div>
      <main style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <div className="boxe">Education</div>

        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Link className="link" to="/category/finance">
            <div className="box1 boxtext">Another Education Choice</div>
          </Link>
          <Link className="link" to="/category/health">
            <div className="box2 boxtext">Another Education Choice</div>
          </Link>
          <Link className="link" to="/category/education">
            <div className="box3 boxtext">Another Education Choice</div>
          </Link>
          <Link className="link" to="/category/career">
            <div className="box4 boxtext">Another Education Choice</div>
          </Link>
          <Link className="link" to="/category/family">
            <div className="box5 boxtext">Another Education Choice</div>
          </Link>
        </section>
      </main>
    </div>
  );
}
