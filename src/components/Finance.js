import React from "react";
import { useNavigate } from "react-router-dom";

export default function Finance(props) {
  const { addGoal } = props;
  const navigate = useNavigate();
  const addNewGoal = (name, category) => {
    addGoal({ name, category });
    navigate("/goals");
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
              addNewGoal("Save for University", "finance");
            }}
            className="box1 boxtext1"
          >
            Save for University
          </div>

          <div
            onClick={() => {
              addNewGoal("Finance Choice1", "finance");
            }}
            className="box1 boxtext1"
          >
            Finance Choice 1
          </div>

          <div
            onClick={() => {
              addNewGoal("Finance Choice1", "finance");
            }}
            className="box1 boxtext1"
          >
            Finance Choice 1
          </div>

          <div
            onClick={() => {
              addNewGoal("Finance Choice2", "finance");
            }}
            className="box1 boxtext1"
          >
            Finance Choice 2
          </div>

          <div
            onClick={() => {
              addNewGoal("Finance Choice3", "finance");
            }}
            className="box1 boxtext1"
          >
            Finance Choice 3
          </div>
        </section>
      </main>
    </div>
  );
}
