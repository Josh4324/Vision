import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Goal() {
  const [goals, setGoalList] = useState([]);
  const removeGoal = (name) => {
    const goals = JSON.parse(localStorage.getItem("vision"));
    let newGoals = goals.filter((item) => {
      return item.name !== name;
    });
    setGoalList(newGoals);
    JSON.stringify(localStorage.setItem("vision", JSON.stringify(newGoals)));
  };

  useEffect(() => {
    const newGoals = JSON.parse(localStorage.getItem("vision"));
    if (newGoals !== null) {
      setGoalList(newGoals);
    }
  }, []);
  return (
    <div style={{ backgroundColor: "red" }}>
      <Header />
      <main>
        <h3
          style={{
            textAlign: "center",
            marginTop: "50px",
            color: "white",
            paddingBottom: "10px",
            borderBottom: "2px solid white",
            width: "200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          YOUR GOALS
        </h3>

        <section
          style={{
            display: "flex",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {goals.map((item) => {
            return (
              <div>
                {item.category === "finance" ? (
                  <div className="box1 boxtext">
                    <i
                      onClick={() => {
                        removeGoal(item.name);
                      }}
                      class="fas fa-minus-circle"
                      style={{
                        position: "relative",
                        top: "-150px",
                        left: "260px",
                      }}
                    ></i>
                    {item.name}
                  </div>
                ) : item.category === "health" ? (
                  <div className="box2 boxtext">
                    {" "}
                    <i
                      onClick={() => {
                        removeGoal(item.name);
                      }}
                      class="fas fa-minus-circle"
                      style={{
                        position: "relative",
                        top: "-150px",
                        left: "260px",
                      }}
                    ></i>
                    {item.name}
                  </div>
                ) : item.category === "education" ? (
                  <div className="box3 boxtext">
                    {" "}
                    <i
                      onClick={() => {
                        removeGoal(item.name);
                      }}
                      class="fas fa-minus-circle"
                      style={{
                        position: "relative",
                        top: "-150px",
                        left: "260px",
                      }}
                    ></i>
                    {item.name}
                  </div>
                ) : item.category === "career" ? (
                  <div className="box4 boxtext">
                    {" "}
                    <i
                      onClick={() => {
                        removeGoal(item.name);
                      }}
                      class="fas fa-minus-circle"
                      style={{
                        position: "relative",
                        top: "-150px",
                        left: "260px",
                      }}
                    ></i>
                    {item.name}
                  </div>
                ) : item.category === "family" ? (
                  <div className="box5 boxtext">
                    {" "}
                    <i
                      onClick={() => {
                        removeGoal(item.name);
                      }}
                      class="fas fa-minus-circle"
                      style={{
                        position: "relative",
                        top: "-150px",
                        left: "260px",
                      }}
                    ></i>
                    {item.name}
                  </div>
                ) : null}
              </div>
            );
          })}
          <Link to="/board" className="link">
            <div className="addGoal">
              <i
                class="fas fa-plus-circle"
                style={{
                  fontSize: "100px",
                  textAlign: "center",
                  display: "block",
                  paddingTop: "40%",
                  boxSizing: "border-box",
                  color: "red",
                }}
              ></i>
            </div>
          </Link>
        </section>

        <span
          style={{
            textDecoration: "none",
            backgroundColor: "yellow",
            height: "30px",
            paddingTop: "5px",
            paddingLeft: "10px",
            paddingRight: "10px",
            color: "red",
            borderRadius: "10px",
            fontWeight: "bold",
            textAlign: "center",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "50px",
            width: "250px",
          }}
          to="/board"
          className="boardLink"
        >
          CONTINUE
        </span>
      </main>
      <Footer />
    </div>
  );
}
