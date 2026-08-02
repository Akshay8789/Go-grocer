import React, { useEffect, useState } from "react";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../elements/navbar.jsx";
import GetUser from "../firestore.operations.files/getuser.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase-config.js";

function Profile() {
  const uid = localStorage.getItem("uid");
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [user, setUser] = useState({
    name: "",
    phonenumber: "Not Set",
    email: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log(uid);
        const userdetails = await GetUser(uid); // change to get user profile
        setUser({
          name: userdetails.name,
          phonenumber: userdetails.phonenumber
            ? userdetails.phonenumber
            : "Not Set",
          email: userdetails.email,
        });
      } catch (error) {
        toast.error("Error fetching user data", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };

    fetchUserData();
  }, [uid]);

  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      toast.error("Please login to continue", {
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
        navigate("/login");
      }, 2000);
    }
  });

  return (
    <>
      <NavBar />
      <div className="bannersec" id="dashboardsec">
        <section className="dashboardcards" id="addresssec">
          <div className="address" id="profile">
            <h4>Profile</h4>
            <div className="addressinput">
              <div>
                <label htmlFor="name">full Name</label>
                <p>{user.name}</p>
                <label htmlFor="phonenumber">phone number</label>
                <p>{user.phonenumber}</p>
              </div>
            </div>
            <div className="addressinput">
              <div>
                <label htmlFor="email">email:&nbsp;&nbsp;&nbsp;</label>
                <p>{user.email}</p>
                <br />
              </div>
            </div>
            <button
              className="loginbutton"
              type="submit"
              id="addressbutton"
              onClick={() => navigate("/profile/edit")}
            >
              Edit
            </button>
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

export default Profile;
