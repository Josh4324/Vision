import React from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";

export default function Finance(props) {
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
        <div className="box">Finance</div>

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
              addNewGoal(" Save More Money", "box11");
            }}
            className="box11 boxtext1"
          >
            Save More Money
          </div>

          <div
            onClick={() => {
              addNewGoal("Start a business/side hustle", "box12");
            }}
            className="box12 boxtext1"
          >
            Start a business/side hustle
          </div>

          <div
            onClick={() => {
              addNewGoal("  Have a monthly budget", "box13");
            }}
            className="box13 boxtext1"
          >
            Have a monthly budget
          </div>

          <div
            onClick={() => {
              addNewGoal(" Invest more", "box14");
            }}
            className="box14 boxtext1"
          >
            Invest more
          </div>

          <div
            onClick={() => {
              addNewGoal("Read finance books/blogs", "box15");
            }}
            className="box15 boxtext1"
          >
            Read finance books/blogs
          </div>
        </section>
      </main>
    </div>
  );
}
