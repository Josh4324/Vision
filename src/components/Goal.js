import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import ReactGA from "react-ga";

export default function Goal() {
  useEffect(() => {
    (() => {
      ReactGA.event({
        category: "Pages",
        action: "Accessed the Goals Page",
      });
    })();
  }, []);
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
      <div className={next === true ? "app-wrapper next" : "app-wrapper next1"}>
        <Header />
        <main>
          <h2 className="board-title">
            <span>YOUR GOALS</span>
          </h2>

          <section className="border-goal-section">
            {goals.map((item) => {
              return (
                <div className={`boxtext1 ${item.image}`}>
                  <i
                    onClick={() => {
                      removeGoal(item.name);
                    }}
                    class="fas fa-minus-circle new-minus"
                  ></i>
                  <span>{item.name}</span>
                </div>
              );
            })}
            {goals.length >= 5 ? null : (
              <Link to="/board" className="link">
                <div className="addGoal">
                  <i class="addGoal__icon fas fa-plus-circle"></i>
                </div>
              </Link>
            )}
          </section>

          <div class="text-center mt-50">
            <span
              className="btn boardLink"
              onClick={() => {
                setNext(true);
                window.scrollTo(0, 0);
              }}
            >
              CONTINUE
            </span>
          </div>
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
            padding: "50px 20px",
            maxWidth: "450px",
          }}
        >
          <p
            style={{
              color: "#cc0125",
              textAlign: "center",
              fontWeight: "bold",
              paddingBottom: "5px",
              marginTop: "0px",
              borderBottom: "2px solid #cc0125",
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
              color: "#cc0125",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex" }}>
              <label>Name:</label>
              <input
                ref={nameRef}
                style={{
                  border: "none",
                  borderBottom: "1px solid #cc0125",
                  marginBottom: "20px",
                  width: "100%",
                }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <label>Email:</label>
              <input
                ref={emailRef}
                type="email"
                style={{
                  border: "none",
                  borderBottom: "1px solid #cc0125",
                  width: "100%",
                }}
              />
            </div>

            <p class="mb-10">
              Would you like us to be your accountability partner?
            </p>

            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="GO FOR IT!"
              />
              <label for="vehicle1">GO FOR IT!</label>
            </div>

            <span
              onClick={async () => {
                let regex =
                  /^[\/\!#\$\%&'\*\+\-\=\?\^_`\{\|\}~A-Za-z0-9]+[\.-]?[\/\!#\$\%&'\*\+\-\=\?\^_`\{\|\}~A-Za-z0-9]*@\w+([\.-]?\w+)*(\.\w{2,40})+$/;
                console.log(regex.test(emailRef.current.value));
                if (regex.test(emailRef.current.value) === false) {
                  return NotificationManager.error(
                    "Please enter your email in the correct format",
                    "Error"
                  );
                }
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
                  localStorage.setItem("visionEmail", emailRef.current.value);
                  const cred = {
                    name: nameRef.current.value,
                    email: emailRef.current.value,
                    goal: localStorage.getItem("vision"),
                  };

                  try {
                    const res = await axios.post(
                      `https://danovisionboard.com/api/v1/user/`,
                      cred
                    );
                    ReactGA.event({
                      category: "Vison",
                      action: "Created a Vision Board",
                    });
                    navigate("/download");
                    return res;
                  } catch (err) {
                    NotificationManager.error("An error occured", "Error");
                    return err.response;
                  }
                }
              }}
              className="btn boardLink mt-20"
            >
              EXPORT YOUR VISION
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
