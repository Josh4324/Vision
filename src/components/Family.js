import React from "react";
import { useNavigate } from "react-router-dom";

export default function Family(props) {
  const { addGoal } = props;
  const navigate = useNavigate();
  const addNewGoal = (name, category) => {
    addGoal({ name, category });
    navigate("/goals");
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
              addNewGoal("Another Family Choice1", "family");
            }}
            className="box5 boxtext1"
          >
            Another Family Choice 1
          </div>

          <div
            onClick={() => {
              addNewGoal("Another Family Choice2", "family");
            }}
            className="box5 boxtext1"
          >
            Another Family Choice 2
          </div>

          <div
            onClick={() => {
              addNewGoal("Another Family Choice3", "family");
            }}
            className="box5 boxtext1"
          >
            Another Family Choice 3
          </div>

          <div
            onClick={() => {
              addNewGoal("Another Family Choice4", "family");
            }}
            className="box5 boxtext1"
          >
            Another Family Choice 4
          </div>

          <div
            onClick={() => {
              addNewGoal("Another Family Choice5", "family");
            }}
            className="box5 boxtext1"
          >
            Another Family Choice 5
          </div>
        </section>
      </main>
    </div>
  );
}
