import React from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function Career(props) {
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
        <div className="box">Career</div>

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
              addNewGoal("Get a job/new job", "box41");
            }}
            className="box41 boxtext1"
          >
            Get a job/new job
          </div>
          <div
            onClick={() => {
              addNewGoal("Learn a new skill", "box42");
            }}
            className="box42 boxtext1"
          >
            Learn a new skill
          </div>
          <div
            onClick={() => {
              addNewGoal("Go for an audition", "box43");
            }}
            className="box43 boxtext1"
          >
            Go for an audition
          </div>
          <div
            onClick={() => {
              addNewGoal(" Learn a new language", "box44");
            }}
            className="box44 boxtext1"
          >
            Learn a new language
          </div>

          <div
            onClick={() => {
              addNewGoal("Get a professional certificate", "box45");
            }}
            className="box45 boxtext1"
          >
            Get a professional certificate
          </div>
        </section>
      </main>
    </div>
  );
}
