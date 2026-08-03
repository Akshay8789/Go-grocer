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

import Footer from "../elements/footer.jsx";

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
      <div className="bannersec" id="dashboardsec" style={{ padding: "40px 5%" }}>
        <section className="dashboardcards" style={{ width: "100%", maxWidth: "1100px", margin: "auto" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <span className="auth-badge" style={{ fontSize: "13px", padding: "6px 16px" }}>
              <i className="fas fa-user-circle"></i> Account Overview
            </span>
            <h1 style={{ fontSize: "34px", fontWeight: "800", color: "#14532d", marginTop: "8px" }}>
              User Dashboard
            </h1>
          </div>

          <div className="card-grid">
            <div className="dashboardcard" onClick={() => click(cardnames[0])}>
              <img
                className="cardimgdashboard"
                src={img1}
                alt="Your Orders"
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
                alt="Address"
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
                alt="Contact Us"
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
                alt="Profile"
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
                alt="Rewards"
                id="dashboardcardimg"
              />
              <div>
                <p className="cardtext" id="dashboardcardtext">
                  Rewards
                </p>
                <p className="carddescription">
                  Access your reward coins and coupons.
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button
              id="logoutbutton"
              onClick={logoutfunc}
              className="auth-submit-btn"
              style={{ width: "220px", margin: "auto", background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)", boxShadow: "0 8px 20px rgba(239, 68, 68, 0.3)" }}
            >
              <img src={logout} alt="logout" id="logouticon" style={{ filter: "brightness(0) invert(1)" }} />
              <span>Logout</span>
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
      <Footer />
    </>
  );
}

export default DashBoard;
