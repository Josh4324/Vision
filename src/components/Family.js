import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function Family(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  const { addGoal } = props;
  const navigate = useNavigate();
  const addNewGoal = (name, image, link) => {
    const goals = JSON.parse(localStorage.getItem("vision"));
    if (goals === null || goals.length < 5) {
      addGoal({ name, image, link });
      navigate("/goals");
    } else {
      NotificationManager.error("You cannot add more than 5 goals", "Error");
    }
  };
  return (
    <div>
      <main style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <div className="board-goals-title boxf">
          {" "}
          <Link to="/board" className="back-link">
            <i style={{ paddingRight: "10px" }} class="fas fa-arrow-left"></i>
          </Link>{" "}
          <span>Family</span>
        </div>

        <section className="border-goal-section">
          <div
            onClick={() => {
              addNewGoal(
                "Go on a family vacation",
                "box51",
                "images/family.jpeg"
              );
            }}
            className="box51 boxtext1"
          >
            <span>Go on a family vacation</span>
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Get into a relationship",
                "box52",
                "images/Get into a relationship.jpg"
              );
            }}
            className="box52 boxtext1"
          >
            <span>Get into a relationship</span>
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Buy a house/car",
                "box53",
                "images/Buy a housecar.jpg"
              );
            }}
            className="box53 boxtext1"
          >
            <span>Buy a house/car</span>
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Build quality connections",
                "box54",
                "images/family.jpg"
              );
            }}
            className="box54 boxtext1"
          >
            <span>Build quality connections</span>
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Find/Develop my talent",
                "box55",
                "images/FindDevelop my talent.jpg"
              );
            }}
            className="box55 boxtext1"
          >
            <span>Find/Develop my talent</span>
          </div>
        </section>
      </main>
    </div>
  );
}
