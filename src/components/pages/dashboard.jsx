import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../elements/navbar.jsx";
import img1 from "../../images/accmedia/001-order.png";
import img2 from "../../images/accmedia/004-placeholder.png";
import img3 from "../../images/accmedia/005-chat.png";
import img4 from "../../images/accmedia/006-user.png";
import img5 from "../../images/accmedia/coupon.png";
import logout from "../../images/accmedia/logout.png";
import { app } from "../../firebase-config.js";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import "../../styles.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DashBoard() {
  let navigate = useNavigate();
  const auth = getAuth(app);
  const cardnames = [
    "profile/yourorders",
    "profile/addresses",
    "contactus",
    "profile",
    "profile/rewards",
  ];

  onAuthStateChanged(auth, (user) => {
    if (user === null) 
    navigate("/login");
  });

  function logoutfunc() {
    signOut(auth)
      .then(() => {
        localStorage.setItem("authenticated", false);
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error, {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  }

  const click = (a) => {
    navigate("/" + a + "?status=arriving");
  };

  return (
    <>
      <NavBar />
      <div className="bannersec" id="dashboardsec">
        <section className="dashboardcards">
          <div className="card-grid">
            <div className="dashboardcard" onClick={() => click(cardnames[0])}>
              <img
                className="cardimgdashboard"
                src={img1}
                alt="pic"
                id="dashboardcardimg"
              />
              <div>
                <p className="cardtext" id="dashboardcardtext">
                  Your Orders
                </p>
                <p className="carddescription">
                  Track and manage your recent orders easily.
                </p>
              </div>
            </div>

            <div className="dashboardcard" onClick={() => click(cardnames[1])}>
              <img
                className="cardimgdashboard"
                src={img2}
                alt="pic"
                id="dashboardcardimg"
              />
              <div>
                <p className="cardtext" id="dashboardcardtext">
                  Address
                </p>
                <p className="carddescription">
                  Update and manage your delivery addresses.
                </p>
              </div>
            </div>

            <div className="dashboardcard" onClick={() => click(cardnames[2])}>
              <img
                className="cardimgdashboard"
                src={img3}
                alt="pic"
                id="dashboardcardimg"
              />
              <div>
                <p className="cardtext" id="dashboardcardtext">
                  Contact Us
                </p>
                <p className="carddescription">
                  Reach out to us for assistance and support.
                </p>
              </div>
            </div>

            <div className="dashboardcard" onClick={() => click(cardnames[3])}>
              <img
                className="cardimgdashboard"
                src={img4}
                alt="pic"
                id="dashboardcardimg"
              />
              <div>
                <p className="cardtext" id="dashboardcardtext">
                  Profile
                </p>
                <p className="carddescription">
                  Manage and customize your user profile settings.
                </p>
              </div>
            </div>
            <div className="dashboardcard" onClick={() => click(cardnames[4])}>
              <img
                className="cardimgdashboard"
                src={img5}
                alt="pic"
                id="dashboardcardimg"
              />
              <div>
                <p className="cardtext" id="dashboardcardtext">
                  Rewards
                </p>
                <p className="carddescription">
                  Access you reward coins and coupons.
                </p>
              </div>
            </div>
          </div>
          <button id="logoutbutton" onClick={logoutfunc}>
            <img src={logout} alt="logout" id="logouticon" />
            Logout
          </button>
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

export default DashBoard;
