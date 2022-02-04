import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Finance from "./Finance";
import Education from "./Education";
import Family from "./Family";
import Career from "./Career";
import Health from "./Health";
import ReactGA from "react-ga";

export default function Category() {
  const { category } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  useEffect(() => {
    cat();
  }, []);
  const cat = () => {
    ReactGA.event({
      category: "Pages",
      action: `Accessed the ${category} Career Page`,
    });
  };

  const addGoal = (name) => {
    let goalList = [];
    let allgoals = JSON.parse(localStorage.getItem("vision"));
    if (allgoals === null) {
      goalList.push(name);
      localStorage.setItem("vision", JSON.stringify(goalList));
    } else {
      allgoals.push(name);
      localStorage.setItem("vision", JSON.stringify(allgoals));
    }
  };
  return (
    <div className="app-wrapper">
      <Header />
      {category === "finance" ? (
        <Finance addGoal={addGoal} />
      ) : category === "education" ? (
        <Education addGoal={addGoal} />
      ) : category === "family" ? (
        <Family addGoal={addGoal} />
      ) : category === "career" ? (
        <Career addGoal={addGoal} />
      ) : category === "health" ? (
        <Health addGoal={addGoal} />
      ) : null}
      <Footer />
    </div>
  );
}
