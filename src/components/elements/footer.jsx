import React, { useState } from "react";
import "../../styles.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscribeEmail || subscribeEmail.trim() === "") {
      toast.warning("Please enter a valid email address", {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
      });
      return;
    }
    toast.success("Thank you for subscribing to GoGrocers newsletter!", {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
    });
    setSubscribeEmail("");
  };

  const Mailto = () => {
    var email = "akshayrajput.8789@gmail.com";
    var subject = "Newsletter";
    var body = "I want to be notified of new offers coming up.";
    window.location.href =
      "mailto:" +
      email +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
  };

  return (
    <div className="footer">
      <div className="footertext">
        <h3 className="brandtext" style={{ fontSize: "24px", marginBottom: "20px" }}>
          SUBSCRIBE TO NEWSLETTER FOR EXCLUSIVE OFFERS!
        </h3>
        <form onSubmit={handleSubscribe} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <input
            type="email"
            className="subscribebox"
            name="email"
            value={subscribeEmail}
            onChange={(e) => setSubscribeEmail(e.target.value)}
            autoComplete="on"
            placeholder="Enter your email@org.com"
            id="emailinputbox"
          />
          <button className="emailbutton" type="submit">
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              Subscribe <i className="fas fa-paper-plane"></i>
            </span>
          </button>
        </form>
        <div style={{ paddingTop: "40px", textAlign: "center" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <i className="fas fa-shopping-basket" style={{ color: "#4ade80" }}></i> GoGrocers
          </h2>
        </div>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.6",
            maxWidth: "750px",
            margin: "15px auto 30px",
            color: "rgba(255, 255, 255, 0.85)",
            textAlign: "center",
          }}
          className="textfooter"
        >
          Our brand provides the best quality grocery delivery with carefully selected products from trusted suppliers. Enjoy flexible delivery options and exceptional customer service for a stress-free shopping experience.
        </p>
      </div>
      <div className="row footerrow">
        <i className="fa-brands fa-twitter ficon" title="Twitter"></i>
        <i className="fa-brands fa-facebook-f ficon" title="Facebook"></i>
        <i className="fa-brands fa-instagram ficon" title="Instagram"></i>
        <i className="fa-solid fa-envelope ficon" onClick={Mailto} title="Email Us"></i>
      </div>
      <p
        style={{
          textAlign: "center",
          paddingTop: "20px",
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: "14px",
        }}
      >
        © Copyright 2023 GoGrocers || Created by{" "}
        <a
          href="https://github.com/Akshay8789?tab=repositories"
          style={{ color: "#4ade80", fontWeight: "700" }}
        >
          Akshay Rajput
        </a>
      </p>
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
  );
}
export default Footer;
