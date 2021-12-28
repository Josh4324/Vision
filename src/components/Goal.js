import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function Goal() {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const navigate = useNavigate();
  const [goals, setGoalList] = useState([]);
  const [next, setNext] = useState(false);
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
    <div>
      <div className={next === true ? "next" : "next1"}>
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
                <div className={`boxtext ${item.image}`}>
                  <i
                    onClick={() => {
                      removeGoal(item.name);
                    }}
                    class="fas fa-minus-circle new-minus"
                  ></i>
                  {item.name}
                </div>
              );
            })}
            {goals.length >= 5 ? null : (
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
            )}
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
            className="boardLink"
            onClick={() => {
              setNext(true);
              window.scrollTo(0, 0);
            }}
          >
            CONTINUE
          </span>
        </main>
        <Footer />
      </div>

      {next === true ? (
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "white",
            width: "400px",
          }}
        >
          <p
            style={{
              color: "red",
              textAlign: "center",
              fontWeight: "bold",
              paddingBottom: "5px",
              marginTop: "50px",
              borderBottom: "2px solid red",
              width: "200px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            YOU'RE ALMOST DONE
          </p>

          <div
            style={{
              width: "80%",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "40px",
              color: "red",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex" }}>
              <label>Name:</label>
              <input
                ref={nameRef}
                style={{
                  border: "none",
                  borderBottom: "1px solid red",
                  marginBottom: "20px",
                  width: "100%",
                }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <label>Emaill:</label>
              <input
                ref={emailRef}
                type="email"
                style={{
                  border: "none",
                  borderBottom: "1px solid red",
                  width: "100%",
                }}
              />
            </div>

            <p>Would you like us to be your accountability partner?</p>

            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="GO FOR IT!"
              />
              <label for="vehicle1">GO FOR IT!</label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="NOT SURE?"
              />
              <label for="vehicle1">NOT SURE?</label>
            </div>

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
                marginBottom: "30px",
                width: "250px",
                cursor: "pointer",
              }}
              onClick={() => {
                if (
                  nameRef.current.value === "" ||
                  emailRef.current.value === ""
                ) {
                  NotificationManager.error(
                    "Please enter your name and email",
                    "Error"
                  );
                } else {
                  localStorage.setItem("visionName", nameRef.current.value);
                  navigate("/download");
                }
              }}
              className="boardLink"
            >
              EXPORT YOUR VISION
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
