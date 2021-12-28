import React, { useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";

export default function Finance(props) {
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
              addNewGoal(" Save More Money", "box11", "images/smm4.jpg");
            }}
            className="box11 boxtext1"
          >
            Save More Money
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Start a business/side hustle",
                "box12",
                "images/hus.jpg"
              );
            }}
            className="box12 boxtext1"
          >
            Start a business/side hustle
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "  Have a monthly budget",
                "box13",
                "images/Have a monthly budget.jpg"
              );
            }}
            className="box13 boxtext1"
          >
            Have a monthly budget
          </div>

          <div
            onClick={() => {
              addNewGoal("Invest more", "box14", "images/Invest more.jpg");
            }}
            className="box14 boxtext1"
          >
            Invest more
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Read finance books/blogs",
                "box15",
                "images/Read finance booksblogs.jpg"
              );
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
