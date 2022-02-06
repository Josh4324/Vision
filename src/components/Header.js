import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

export default function Header() {
  useEffect(() => {
    (() => {
      ReactGA.event({
        category: "Pages",
        action: "Played Dano Videos",
      });
    })();
  }, []);

  const TRACKING_ID = "298615363"; // YOUR_OWN_TRACKING_IDs
  ReactGA.initialize(TRACKING_ID);
  const goals = JSON.parse(localStorage.getItem("vision"));
  let linkurl;
  if (goals !== null && goals.length === 5) {
    linkurl = "/goals";
  } else {
    linkurl = "/board";
  }
  return (
    <div>
      <header className="header-main">
        <div className="logo-section">
          <Link className="logo-section__link" to="/">
            {" "}
            <img
              className="logo-section__image"
              src="/images/logo.png"
              alt="logo"
            />
            <span className="logo-section__text">MY VISION BOARD</span>
          </Link>
        </div>
        <Link className="header-button btn boardLink boardnone" to={linkurl}>
          CREATE YOUR VISION BOARD
        </Link>
      </header>
    </div>
  );
}
