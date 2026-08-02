import React, { useState } from "react";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../elements/navbar.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetUser from "../firestore.operations.files/getuser.js";
import CreateQuery from "../firestore.operations.files/createquery.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase-config.js";

function ContactUs() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userid = localStorage.getItem("uid");
    const userdetails = await GetUser(userid);  
    const userEmail = userdetails.email;
    const query = e.target.query.value;
    CreateQuery(userid, userEmail, query);
    toast.success("Query sent! The team will get back to you shortly", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  onAuthStateChanged(auth, (user) => {
    if(user === null){
      navigate("/");
    }
  });


  return (
    <>
      <NavBar />
      <div className="bannersec" id="dashboardsec">
        <section className="dashboardcards" id="contactussec">
          <div className="contactus">
            <h4>Contact Us</h4>
            <form onSubmit={handleSubmit}>
              <textarea
                id="contentquery"
                autoComplete="off"
                placeholder="Write any queries or suggestions"
                rows="4"
                wrap="soft"
                value={query}
                name="query"
                onChange={(e) => setQuery(e.target.value)}
              ></textarea>
              <br />
              <button
                className="loginbutton"
                type="submit"
                id="contactusbutton"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
        <ToastContainer
          position="top-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
      <div
        style={{
          backgroundColor: "rgba(180, 180, 180, 0.300)",
          paddingBottom: "30px",
        }}
      >
        <div className="row footerrow">
          <i className="fa-brands fa-twitter ficon"></i>
          <i className="fa-brands fa-facebook-f ficon"></i>
          <i className="fa-brands fa-instagram ficon"></i>
          <i className="fa-solid fa-envelope ficon"></i>
        </div>
        <p
          style={{
            textAlign: "center",
            position: "relative",
            right: "15px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          © Copyright 2023 GoGrocers || Created by{" "}
          <a
            href="https://github.com/VAbhijith2003github?tab=repositories"
            style={{ color: "palevioletred" }}
          >
            Abhijith
          </a>
        </p>
      </div>
    </>
  );
}

export default ContactUs;
