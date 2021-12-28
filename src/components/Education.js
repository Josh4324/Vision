import React from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function Education(props) {
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
        <div className="boxe">Education</div>

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
              addNewGoal(" Get a degree", "box31");
            }}
            className="box31 boxtext1"
          >
            Get a degree
          </div>
          <div
            onClick={() => {
              addNewGoal("Improve my grades", "box32");
            }}
            className="box32 boxtext1"
          >
            Improve my grades
          </div>
          <div
            onClick={() => {
              addNewGoal("Read more books", "box33");
            }}
            className="box33 boxtext1"
          >
            Read more books
          </div>
          <div
            onClick={() => {
              addNewGoal(" Get a scholarship", "box34");
            }}
            className="box34 boxtext1"
          >
            Get a scholarship
          </div>

          <div
            onClick={() => {
              addNewGoal("Complete a training course", "box35");
            }}
            className="box35 boxtext1"
          >
            Complete a training course
          </div>
        </section>
      </main>
    </div>
  );
}
