import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

export default function Home() {
  const TRACKING_ID = "298615363"; // YOUR_OWN_TRACKING_IDs
  ReactGA.initialize(TRACKING_ID);
  const goals = JSON.parse(localStorage.getItem("vision"));
  let linkurl;
  if (goals !== null && goals.length === 5) {
    linkurl = "/goals";
  } else {
    linkurl = "/board";
  }
  const videoRef = useRef("");
  const modalRef = useRef("");
  const removeRef = useRef("");
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  useEffect(() => {
    (() => {
      ReactGA.event({
        category: "Pages",
        action: "Accessed the Home Page",
      });
    })();
  }, []);

  const playVideo = () => {
    ReactGA.event({
      category: "User",
      action: "Played Dano Videos",
    });

    videoRef.current.classList.toggle("none");
    modalRef.current.classList.add("pop1");
    videoRef.current.play();
    removeRef.current.classList.remove("none");
  };

  const removeVideo = (evt) => {
    modalRef.current.classList.remove("pop1");
    videoRef.current.pause();
    videoRef.current.classList.toggle("none");
    removeRef.current.classList.add("none");
  };
  return (
    <div className="app-wrapper">
      <div ref={modalRef} onClick={removeVideo} className=""></div>
      <Header />
      <main>
        <div className="banner">
          <div className="banner__text">
            <h1>Vision Board helps you visualize your goals.</h1>
            <h1>To achieve it, you have to</h1>
            <h1>GO FOR IT!</h1>

            <i
              ref={removeRef}
              class="fas fa-times-circle close none"
              onClick={removeVideo}
            ></i>

            <span
              onClick={playVideo}
              className="banner_btn btn btn--red btn--lg mt-20"
            >
              WATCH VIDEO
            </span>
          </div>
        </div>

        <h2 className="milk-header">
          <span>Why do you need a Vision Board?</span>
        </h2>

        <div className="milk-drop-wrapper">
          <div className="milk-drop">
            <span className="milk-drop__header">1.</span>
            <div className="milk-drop__body">
              Writing down your goals is powerful. it makes you think deeper
              about what you want
            </div>
          </div>
          <div className="milk-drop">
            <span className="milk-drop__header">2.</span>
            <div className="milk-drop__body">
              It helps you set realistic goals and measure your goals
            </div>
          </div>
          <div className="milk-drop">
            <span className="milk-drop__header">3.</span>
            <div className="milk-drop__body">
              It acts as your daily reminder and you can evaluate your actions
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to={linkurl} className="btn mt-70 mx-auto">
            CREATE YOUR VISION BOARD
          </Link>
        </div>

        <video
          id="video"
          class="video none"
          src="https://res.cloudinary.com/josh4324/video/upload/v1640763780/Dano_Board_Video_1_ftzk7e.mp4"
          type="video/mp4"
          preload="true"
          controls
          ref={videoRef}
        ></video>
      </main>
      <Footer />
    </div>
  );
}
