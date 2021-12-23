import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Health(props) {
  const { addGoal } = props;
  const navigate = useNavigate();
  const addNewGoal = (name, category) => {
    addGoal({ name, category });
    navigate("/goals");
  };
  return (
    <div>
      <main style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <div className="boxh">Health</div>

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
              addNewGoal("Another Health Choice1", "health");
            }}
            className="box2 boxtext1"
          >
            Another Health Choice
          </div>

          <div
            onClick={() => {
              addNewGoal("Another Health Choice2", "health");
            }}
            className="box2 boxtext1"
          >
            Another Health Choice
          </div>

          <div
            onClick={() => {
              addNewGoal("Another Health Choice3", "health");
            }}
            className="box2 boxtext1"
          >
            Another Health Choice
          </div>

          <div
            onClick={() => {
              addNewGoal("Another Health Choice4", "health");
            }}
            className="box2 boxtext1"
          >
            Another Health Choice
          </div>

          <div
            onClick={() => {
              addNewGoal("Another Health Choice5", "health");
            }}
            className="box2 boxtext1"
          >
            Another Health Choice
          </div>
        </section>
      </main>
    </div>
  );
}
