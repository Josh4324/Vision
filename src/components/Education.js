import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function Education(props) {
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
        <div className="board-goals-title boxe">
          <Link to="/board" className="back-link">
            <i style={{ paddingRight: "10px" }} class="fas fa-arrow-left"></i>
          </Link>{" "}
          <span>Education</span>
        </div>

        <section className="border-goal-section">
          <div
            onClick={() => {
              addNewGoal("Get a degree", "box31", "images/Get a degree.jpg");
            }}
            className="box31 boxtext1"
          >
            <span>Get a degree</span>
          </div>
          <div
            onClick={() => {
              addNewGoal(
                "Improve my grades",
                "box32",
                "images/Improve my grades.jpg"
              );
            }}
            className="box32 boxtext1"
          >
            <span>Improve my grades</span>
          </div>
          <div
            onClick={() => {
              addNewGoal(
                "Read more books",
                "box33",
                "images/Read more books.jpg"
              );
            }}
            className="box33 boxtext1"
          >
            <span>Read more books</span>
          </div>
          <div
            onClick={() => {
              addNewGoal(
                " Get a scholarship",
                "box34",
                "images/Get a scholarship.jpg"
              );
            }}
            className="box34 boxtext1"
          >
            <span>Get a scholarship</span>
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Complete a training course",
                "box35",
                "images/Complete a training course.jpg"
              );
            }}
            className="box35 boxtext1"
          >
            <span>Complete a training course</span>
          </div>
        </section>
      </main>
    </div>
  );
}
