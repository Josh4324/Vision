import React from "react";
import { useNavigate } from "react-router-dom";

export default function Career(props) {
  const { addGoal } = props;
  const navigate = useNavigate();
  const addNewGoal = (name, category) => {
    addGoal({ name, category });
    navigate("/goals");
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
              addNewGoal("Another Career Choice1", "career");
            }}
            className="box4 boxtext1"
          >
            Another Career Choice 1
          </div>

          <div
            onClick={() => {
              addNewGoal("Another Career Choice2", "career");
            }}
            className="box4 boxtext1"
          >
            Another Career Choice 2
          </div>

          <div
            onClick={() => {
              addNewGoal("Another Career Choice3", "career");
            }}
            className="box4 boxtext1"
          >
            Another Career Choice 3
          </div>

          <div
            onClick={() => {
              addNewGoal("Another Career Choice4", "career");
            }}
            className="box4 boxtext1"
          >
            Another Career Choice 4
          </div>

          <div
            onClick={() => {
              addNewGoal("Another Career Choice5", "career");
            }}
            className="box4 boxtext1"
          >
            Another Career Choice 5
          </div>
        </section>
      </main>
    </div>
  );
}
