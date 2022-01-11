import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { NotificationManager } from "react-notifications";
import axios from "axios";

export default function Download() {
  const [pic, setPic] = useState("");
  let newimgs = [];
  let newtext = [];
  let numbercheck = 0;
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  useEffect(() => {
    const name = localStorage.getItem("visionName");
    const goals = JSON.parse(localStorage.getItem("vision"));
    goals.map((item, index) => {
      if (index === 0) {
        newimgs.push({
          uri: item.link,
          x: 100,
          y: 180,
          sw: 140,
          sh: 120,
        });

        newtext.push({
          text: item.name,
          x: 100,
          y: 280,
          xt: 105,
          yt: 293,
        });
      }

      if (index === 1) {
        newimgs.push({
          uri: item.link,
          x: 255,
          y: 180,
          sw: 140,
          sh: 120,
        });

        newtext.push({
          text: item.name,
          x: 255,
          y: 280,
          xt: 260,
          yt: 293,
        });
      }

      if (index === 2) {
        newimgs.push({
          uri: item.link,
          x: 55,
          y: 310,
          sw: 140,
          sh: 120,
        });

        newtext.push({
          text: item.name,
          x: 55,
          y: 410,
          xt: 60,
          yt: 423,
        });
      }

      if (index === 3) {
        newimgs.push({
          uri: item.link,
          x: 200,
          y: 310,
          sw: 140,
          sh: 120,
        });

        newtext.push({
          text: item.name,
          x: 200,
          y: 410,
          xt: 210,
          yt: 425,
        });
      }

      if (index === 4) {
        newimgs.push({
          uri: item.link,
          x: 345,
          y: 310,
          sw: 140,
          sh: 120,
        });

        newtext.push({
          text: item.name,
          x: 345,
          y: 410,
          xt: 350,
          yt: 423,
        });

        newimgs.push({
          uri: "/images/logo_danox70.jpg",
          x: 130,
          y: 120,
          sw: 60,
          sh: 40,
        });
      }
      return "";
    });

    const getContext = () => document.getElementById("canvas").getContext("2d");
    const ctx = getContext();

    // It's better to use async image loading.
    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`load ${url} fail`));
        img.src = url;
      });
    };

    // Here, I created a function to draw image.
    const depict = (options) => {
      const ctx = getContext();
      // And this is the key to this solution
      // Always remember to make a copy of original object, then it just works :)
      const myOptions = Object.assign({}, options);

      return loadImage(myOptions.uri).then((img) => {
        ctx.drawImage(
          img,
          myOptions.x,
          myOptions.y,
          myOptions.sw,
          myOptions.sh
        );
        numbercheck = numbercheck + 1;
        if (numbercheck === 6) {
          console.log("done");
          ctx.font = "14px Futura";
          ctx.fillStyle = "#cc0125";
          ctx.fillText("MY VISION BOARD", 200, 150);
          ctx.font = "12px Futura";
          ctx.fillStyle = "white";
          ctx.fillText(`We wish you all the best, ${name}`, 260, 450);

          newtext.map((item) => {
            ctx.fillStyle = "black";
            ctx.fillRect(item.x, item.y, 140, 20);
            ctx.fillStyle = "white";
            ctx.font = "10px Futura";
            ctx.fillText(item.text, item.xt, item.yt);
          });

          // eslint-disable-next-line no-unused-expressions
          (async () => {
            const canvas = document.getElementById("canvas");
            const dataURL = canvas.toDataURL("image/jpeg", 1.0);
            let formData = new FormData();
            let email = localStorage.getItem("visionEmail");
            formData.append("image", dataURL);
            formData.append("email", email);
            try {
              const res = await axios.patch(
                `https://danovisionboard.com/api/v1/user/image`,
                formData
              );
              if (res) {
                const res = await axios.get(
                  `https://danovisionboard.com/api/v1/user?email=${email}`,
                  formData
                );
                setPic(res.data.data.image);
              }
            } catch (err) {
              NotificationManager.error("An error occured", "Error");
              return err.response;
            }
          })();
        }
      });
    };

    const generateImage = () => {
      ctx.fillStyle = "#cc0125";
      ctx.fillRect(0, 0, 500, 500);

      loadImage("/images/share.png")
        .then((img) => {
          ctx.drawImage(img, 50, 55, 400, 400);
        })
        .then(() => {
          newimgs.forEach(depict);
        });
    };

    generateImage();

    return () => {};
  }, []);

  const download = () => {
    const canvas = document.getElementById("canvas");
    const dataURL = canvas.toDataURL("image/jpeg", 1.0);
    const a = document.createElement("a");
    a.download = "vision.png";
    a.href = dataURL;
    document.body.appendChild(a);
    a.click();
  };

  return (
    <div className="app-wrapper">
      <Header />

      <canvas
        style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}
        width="500px"
        height="500px"
        id="canvas"
      />

      <div
        class="share-button text-center mt-4 d-flex"
        style={{
          display: "flex",
          width: "200px",
          marginRight: "auto",
          marginLeft: "auto",
          justifyContent: "space-between",
        }}
      >
        {pic.length > 0 ? (
          <div className="share-text mt-3 mb-1" style={{ color: "white" }}>
            Share
          </div>
        ) : null}

        {pic.length > 0 ? (
          <a
            target="_blank"
            style={{ color: "white" }}
            rel="noopener noreferrer"
            className="share-button mr-3"
            href={`https://www.facebook.com/sharer.php?u=${pic}`}
          >
            <i class="fab fa-facebook-square"></i>
          </a>
        ) : null}

        {pic.length > 0 ? (
          <a
            target="_blank"
            style={{ color: "white" }}
            rel="noopener noreferrer"
            className="share-button mr-3"
            href={`https://twitter.com/share?text=I just checked generated my vision board. You can generate yours at at https://danovisionboard.com, check it out - ${pic}`}
          >
            <i class="fab fa-twitter-square"></i>
          </a>
        ) : (
          <span style={{ color: "white" }}>loading....</span>
        )}

        <button
          style={{
            backgroundColor: "yellow",
            display: "block",
            borderRadius: "10px",
            border: "none",
            paddingLeft: "5px",
            paddingRight: "5px",
            color: "#cc0125",
            fontWeight: "bold",
          }}
          onClick={download}
        >
          DOWNLOAD
        </button>
      </div>

      <Footer style={{ marginTop: "900px" }} />
    </div>
  );
}
