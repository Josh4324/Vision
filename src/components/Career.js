import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function Career(props) {
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
        <div className="box">
          <Link to="/board" style={{ textDecoration: "none", color: "white" }}>
            <i style={{ paddingRight: "10px" }} class="fas fa-arrow-left"></i>
          </Link>{" "}
          Career
        </div>

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
              addNewGoal(
                "Get a job/new job",
                "box41",
                "images/Get a jobnew job.jpg"
              );
            }}
            className="box41 boxtext1"
          >
            Get a job/new job
          </div>
          <div
            onClick={() => {
              addNewGoal(
                "Learn a new skill",
                "box42",
                "images/Learn a new skill.jpg"
              );
            }}
            className="box42 boxtext1"
          >
            Learn a new skill
          </div>
          <div
            onClick={() => {
              addNewGoal(
                "Go for an audition",
                "box43",
                "images/Go for an audition.jpg"
              );
            }}
            className="box43 boxtext1"
          >
            Go for an audition
          </div>
          <div
            onClick={() => {
              addNewGoal(
                " Learn a new language",
                "box44",
                "images/Learn a new language.jpg"
              );
            }}
            className="box44 boxtext1"
          >
            Learn a new language
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Get a professional certificate",
                "box45",
                "images/Get a professional certificate.jpg"
              );
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
