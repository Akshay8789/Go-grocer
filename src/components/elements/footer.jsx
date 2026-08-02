import React from "react";
import "../../styles.css";

function Footer() {
  const Mailto = () => {
    var email = "vabhijith2003@gmail.com";
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
        <h3 className="brandtext">SUSCRIBE TO NEWSLETTER FOR OFFERS!</h3>
        <form action="/">
          <input
            type="email"
            className="suscribebox"
            name="email"
            autoComplete="on"
            placeholder="email@org.com"
            id="emailinputbox"
          />
          <button className="emailbutton" type="submit">
            <h5>SUBMIT</h5>
          </button>
        </form>
        <h3 style={{ paddingTop: "50px" }}>GoGrocers</h3>
        <p
          style={{
            fontSize: "1.1em",
            margin: "auto",
            paddingLeft: "0px",
            paddingRight: "10px",
            paddingBottom: "50px",
          }}
          className="textfooter"
        >
          "Our brand provides the best quality grocery delivery, with carefully
          selected products from trusted suppliers and experienced personal
          shoppers. We offer flexible delivery options to fit busy schedules and
          pride ourselves on exceptional customer service. Our goal is to
          provide a stress-free grocery shopping experience with high-quality
          products and friendly support.."
        </p>
      </div>
      <div className="row footerrow">
        <i className="fa-brands fa-twitter ficon"></i>
        <i className="fa-brands fa-facebook-f ficon"></i>
        <i className="fa-brands fa-instagram ficon"></i>
        <i className="fa-solid fa-envelope ficon" onClick={Mailto}></i>
      </div>
      <p
        style={{
          textAlign: "center",
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
  );
}
export default Footer;
