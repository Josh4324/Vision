import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Download() {
  let newimgs = [];
  let newtext = [];
  const rimag = "";
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
          uri: "/images/share.png",
          x: 50,
          y: 55,
          sw: 400,
          sh: 400,
        });
        newimgs.push({
          uri: "/images/logo_danox70.jpg",
          x: 130,
          y: 120,
          sw: 60,
          sh: 40,
        });

        newimgs.push({
          uri: item.link,
          x: 125,
          y: 180,
          sw: 120,
          sh: 120,
        });

        newtext.push({
          text: item.name,
          x: 125,
          y: 280,
          xt: 130,
          yt: 293,
        });
      }

      if (index === 1) {
        newimgs.push({
          uri: item.link,
          x: 255,
          y: 180,
          sw: 120,
          sh: 120,
        });

        newtext.push({
          text: item.name,
          x: 255,
          y: 280,
          xt: 270,
          yt: 293,
        });
      }

      if (index === 2) {
        newimgs.push({
          uri: item.link,
          x: 55,
          y: 310,
          sw: 120,
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
          sw: 120,
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
          sw: 120,
          sh: 120,
        });

        newtext.push({
          text: item.name,
          x: 345,
          y: 410,
          xt: 350,
          yt: 423,
        });

        // newimgs.push({
        //   uri: "/images/logo_dano.jpg",
        //   x: 130,
        //   y: 120,
        //   sw: 60,
        //   sh: 40,
        // });
      }
    });

    const getContext = () => document.getElementById("canvas").getContext("2d");
    const ctx = document.getElementById("canvas").getContext("2d");

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
      });
    };

    newimgs.forEach(depict);
    ctx.fillStyle = "#cc0125";
    ctx.fillRect(0, 0, 500, 500);
    setTimeout(() => {
      ctx.font = "14px Futura";
      ctx.fillStyle = "#cc0125";
      ctx.fillText("MY VISION BOARD", 200, 150);
      ctx.font = "12px Futura";
      ctx.fillStyle = "white";
      ctx.fillText(`We wish you all the best, ${name}`, 260, 450);
    }, 1000);

    setTimeout(() => {
      newtext.map((item) => {
        ctx.fillStyle = "black";
        ctx.fillRect(item.x, item.y, 120, 20);
        ctx.fillStyle = "white";
        ctx.font = "10px Futura";
        ctx.fillText(item.text, item.xt, item.yt);
      });
    }, 1000);

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
        <div className="share-text mt-3 mb-1" style={{ color: "white" }}>
          Share
        </div>
        <a
          target="_blank"
          style={{ color: "white" }}
          rel="noopener noreferrer"
          className="share-button mr-3"
          href={`https://www.facebook.com/sharer.php?u=${rimag}`}
        >
          <i class="fab fa-facebook-square"></i>
        </a>
        <a
          target="_blank"
          style={{ color: "white" }}
          rel="noopener noreferrer"
          className="share-button mr-3"
          href={`https://twitter.com/share?text=I just checked generated my vision board. You can generate yours at at https://danovisionboard.com, check it out - ${rimag}`}
        >
          <i class="fab fa-twitter-square"></i>
        </a>
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
