import React, { useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { Link, useNavigate } from "react-router-dom";

export default function Health(props) {
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
        <div className="board-goals-title boxh">
          {" "}
          <Link to="/board" className="back-link">
            <i style={{ paddingRight: "10px" }} class="fas fa-arrow-left"></i>
          </Link>{" "}
          <span>Health</span>
        </div>

        <section className="border-goal-section">
          <div
            onClick={() => {
              addNewGoal("Healthy Body Mass Index", "box21", "images/bmi.jpg");
            }}
            className="box21 boxtext1"
          >
            <span>Maintain a healthy Body Mass Index (BMI)</span>
          </div>
          <div
            onClick={() => {
              addNewGoal(
                "Start working out",
                "box22",
                "images/Start working out.jpg"
              );
            }}
            className="box22 boxtext1"
          >
            <span>Start working out</span>
          </div>
          <div
            onClick={() => {
              addNewGoal(
                "Invest in self-care",
                "box23",
                "images/spa-and-wellness.jpg"
              );
            }}
            className="box23 boxtext1"
          >
            <span>Invest in Self-Care</span>
          </div>
          <div
            onClick={() => {
              addNewGoal(
                "Eat more fruits/healthy foods",
                "box24",
                "images/Eat more fruitshealthy foods.jpg"
              );
            }}
            className="box24 boxtext1"
          >
            <span>Eat more fruits/healthy foods</span>
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Drink more water",
                "box25",
                "images/Drink more water.jpg"
              );
            }}
            className="box25 boxtext1"
          >
            <span>Drink more water</span>
          </div>
        </section>
      </main>
    </div>
  );
}
