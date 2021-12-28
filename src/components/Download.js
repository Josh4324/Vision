import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Download() {
  let newimgs = [];
  useEffect(() => {
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
          x: 55,
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
      }
    });
    console.log(document.getElementById("canvas"));
    const getContext = () => document.getElementById("canvas").getContext("2d");

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
    return () => {};
  }, []);

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
    <div style={{ backgroundColor: "red", height: "100vh" }}>
      <Header />

      <canvas
        style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}
        width="500px"
        height="500px"
        id="canvas"
      />

      <Footer />
    </div>
  );
}
