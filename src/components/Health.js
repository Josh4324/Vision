import React from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";

export default function Health(props) {
  const { addGoal } = props;
  const navigate = useNavigate();
  const addNewGoal = (name, image) => {
    const goals = JSON.parse(localStorage.getItem("vision"));
    if (goals === null || goals.length < 5) {
      addGoal({ name, image });
      navigate("/goals");
    } else {
      NotificationManager.error("You cannot add more than 5 goals", "Error");
    }
  };
  return (
    <div>
      <main style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <div className="boxh">Health</div>

        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div
            onClick={() => {
              addNewGoal("Maintain a healthy Body Mass Index (BMI)", "box21");
            }}
            className="box21 boxtext1"
          >
            Maintain a healthy Body Mass Index (BMI)
          </div>
          <div
            onClick={() => {
              addNewGoal("Start working out", "box22");
            }}
            className="box22 boxtext1"
          >
            Start working out
          </div>
          <div
            onClick={() => {
              addNewGoal("Get health insurance", "box23");
            }}
            className="box23 boxtext1"
          >
            Get health insurance
          </div>
          <div
            onClick={() => {
              addNewGoal("Eat more fruits/healthy foods", "box24");
            }}
            className="box24 boxtext1"
          >
            Eat more fruits/healthy foods
          </div>

          <div
            onClick={() => {
              addNewGoal("Drink more water", "box25");
            }}
            className="box25 boxtext1"
          >
            Drink more water
          </div>
        </section>
      </main>
    </div>
  );
}
