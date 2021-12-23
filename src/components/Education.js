import React from "react";
import { useNavigate } from "react-router-dom";

export default function Education(props) {
  const { addGoal } = props;
  const navigate = useNavigate();
  const addNewGoal = (name, category) => {
    addGoal({ name, category });
    navigate("/goals");
  };
  return (
    <div>
      <main style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <div className="boxe">Education</div>

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
              addNewGoal("Education Choice1", "education");
            }}
            className="box3 boxtext1"
          >
            Another Education Choice
          </div>

          <div
            onClick={() => {
              addNewGoal("Education Choice2", "education");
            }}
            className="box3 boxtext1"
          >
            Another Education Choice
          </div>

          <div
            onClick={() => {
              addNewGoal("Education Choice3", "education");
            }}
            className="box3 boxtext1"
          >
            Another Education Choice
          </div>

          <div
            onClick={() => {
              addNewGoal("Education Choice4", "education");
            }}
            className="box3 boxtext1"
          >
            Another Education Choice
          </div>

          <div
            onClick={() => {
              addNewGoal("Education Choice5", "education");
            }}
            className="box3 boxtext1"
          >
            Another Education Choice
          </div>
        </section>
      </main>
    </div>
  );
}
