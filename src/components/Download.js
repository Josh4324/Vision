import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Download() {
  let newimgs = [];
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
          uri: "/images/bg-sec.png",
          x: 50,
          y: 55,
          sw: 400,
          sh: 400,
        });

        newimgs.push({
          uri: item.link,
          x: 135,
          y: 160,
          sw: 120,
          sh: 120,
        });
      }

      if (index === 1) {
        newimgs.push({
          uri: item.link,
          x: 265,
          y: 160,
          sw: 120,
          sh: 120,
        });
      }

      if (index === 2) {
        newimgs.push({
          uri: item.link,
          x: 55,
          y: 290,
          sw: 120,
          sh: 120,
        });
      }

      if (index === 3) {
        newimgs.push({
          uri: item.link,
          x: 200,
          y: 290,
          sw: 120,
          sh: 120,
        });
      }

      if (index === 4) {
        newimgs.push({
          uri: item.link,
          x: 345,
          y: 290,
          sw: 120,
          sh: 120,
        });

        newimgs.push({
          uri: "/images/logo.jpg",
          x: 150,
          y: 120,
          sw: 80,
          sh: 30,
        });
      }
    });
    console.log(newimgs);
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
    setTimeout(() => {
      ctx.font = "14px Futura";
      ctx.fillStyle = "red";
      ctx.fillText("MY VISION BOARD", 240, 140);
      ctx.font = "12px Futura";
      ctx.fillStyle = "white";
      ctx.fillText(`We wish you all the best, ${name}`, 260, 450);
    }, 2000);

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

  const imgs = [
    {
      uri: "/images/bg-sec.png",
      x: 50,
      y: 55,
      sw: 400,
      sh: 400,
    },
    {
      uri: "/images/Learn a new skill.jpg",
      x: 135,
      y: 160,
      sw: 120,
      sh: 120,
    },
    {
      uri: "/images/Learn a new skill.jpg",
      x: 265,
      y: 160,
      sw: 120,
      sh: 120,
    },

    {
      uri: "/images/Learn a new skill.jpg",
      x: 55,
      y: 290,
      sw: 120,
      sh: 120,
    },
    {
      uri: "/images/Learn a new skill.jpg",
      x: 200,
      y: 290,
      sw: 120,
      sh: 120,
    },
    {
      uri: "/images/Get a degree.jpg",
      x: 345,
      y: 290,
      sw: 120,
      sh: 120,
    },
  ];

  return (
    <div style={{ backgroundColor: "red" }}>
      <Header />

      <canvas
        style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}
        width="500px"
        height="500px"
        id="canvas"
      />
      <button
        style={{
          textAlign: "center",
          display: "block",
          width: "200px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        onClick={download}
      >
        DOWNLOAD
      </button>

      <Footer style={{ marginTop: "900px" }} />
    </div>
  );
}
