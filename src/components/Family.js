import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function Family(props) {
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
              addNewGoal(
                "Go on a vacation",
                "box51",
                "images/Go on a vacation.jpg"
              );
            }}
            className="box51 boxtext1"
          >
            Go on a vacation
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Get into a relationship",
                "box52",
                "images/Get into a relationship.jpg"
              );
            }}
            className="box52 boxtext1"
          >
            Get into a relationship
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Buy a house/car",
                "box53",
                "images/Buy a housecar.jpg"
              );
            }}
            className="box53 boxtext1"
          >
            Buy a house/car
          </div>

          <div
            onClick={() => {
              addNewGoal("Make more friends", "box54", "images/family.jpg");
            }}
            className="box54 boxtext1"
          >
            Make more friends
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Find/Develop my talent",
                "box55",
                "images/FindDevelop my talent.jpg"
              );
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
