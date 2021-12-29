import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const videoRef = useRef("");
  const homeRef = useRef("");
  const modalRef = useRef("");
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  const playVideo = () => {
    console.log("play");
    console.log(videoRef.current);
    videoRef.current.classList.toggle("none");
    console.log(homeRef.current);
    modalRef.current.classList.add("pop1");
    videoRef.current.play();
  };

  const removeVideo = (evt) => {
    modalRef.current.classList.remove("pop1");
    videoRef.current.pause();
    videoRef.current.classList.toggle("none");
  };
  return (
    <div className="pop">
      <div ref={modalRef} onClick={removeVideo} className=""></div>
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
            <div style={{ lineHeight: "2em" }}>
              Vision Board helps you visualize your goals.
            </div>
            <div style={{ lineHeight: "2em" }}>To achieve it, you have to</div>
            <div style={{ lineHeight: "2em" }}>GO FOR IT!</div>

            <span onClick={playVideo} className="boardLink1">
              WATCH VIDEO
            </span>
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

        <div className="imgBlockList">
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
