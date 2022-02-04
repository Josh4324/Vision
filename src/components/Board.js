import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

export default function Home() {
  const TRACKING_ID = "298615363";
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  useEffect(() => {
    (() => {
      ReactGA.initialize(TRACKING_ID);
      ReactGA.event({
        category: "Pages",
        action: "Accessed the Vision Board Page",
      });
    })();
  }, []);
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <h2 className="board-title">
          <span>CHOOSE CATEGORY</span>
        </h2>

        <section className="board-main-section">
          <Link className="link" to="/category/finance">
            <div className="box1 boxtext">
              <span>Finance</span>
            </div>
          </Link>
          <Link className="link" to="/category/health">
            <div className="box2 boxtext">
              <span>Health</span>
            </div>
          </Link>
          <Link className="link" to="/category/education">
            <div className="box3 boxtext">
              <span>Education</span>
            </div>
          </Link>
          <Link className="link" to="/category/career">
            <div className="box4 boxtext">
              <span>Career</span>
            </div>
          </Link>
          <Link className="link" to="/category/family">
            <div className="box5 boxtext">
              <span>Family</span>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
