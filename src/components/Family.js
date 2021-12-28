import React from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function Family(props) {
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
        <div className="boxf">Family</div>

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
              addNewGoal("Go on a vacation", "box51");
            }}
            className="box51 boxtext1"
          >
            Go on a vacation
          </div>

          <div
            onClick={() => {
              addNewGoal("Get into a relationship", "box52");
            }}
            className="box52 boxtext1"
          >
            Get into a relationship
          </div>

          <div
            onClick={() => {
              addNewGoal("Buy a house/car", "family");
            }}
            className="box53 boxtext1"
          >
            Buy a house/car
          </div>

          <div
            onClick={() => {
              addNewGoal("Make more friends", "box54");
            }}
            className="box54 boxtext1"
          >
            Make more friends
          </div>

          <div
            onClick={() => {
              addNewGoal("Find/Develop my talent", "box55");
            }}
            className="box55 boxtext1"
          >
            Find/Develop my talent
          </div>
        </section>
      </main>
    </div>
  );
}
