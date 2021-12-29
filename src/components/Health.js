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
        <div className="boxh">
          {" "}
          <Link to="/board" style={{ textDecoration: "none", color: "white" }}>
            <i style={{ paddingRight: "10px" }} class="fas fa-arrow-left"></i>
          </Link>{" "}
          Health
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
              addNewGoal("Healthy Body Mass Index", "box21", "images/bmi.jpg");
            }}
            className="box21 boxtext1"
          >
            Maintain a healthy Body Mass Index (BMI)
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
            Start working out
          </div>
          <div
            onClick={() => {
              addNewGoal(
                "Get health insurance",
                "box23",
                "images/Get health insurance.jpg"
              );
            }}
            className="box23 boxtext1"
          >
            Get health insurance
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
            Eat more fruits/healthy foods
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
            Drink more water
          </div>
        </section>
      </main>
    </div>
  );
}
