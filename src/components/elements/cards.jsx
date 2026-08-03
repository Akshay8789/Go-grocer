import React from "react";
import "../../styles.css";
import img1 from "../../images/product_cards/veggiesimg.png";
import img2 from "../../images/product_cards/personal care.png";
import img3 from "../../images/product_cards/packaged products.png";
import img4 from "../../images/product_cards/cleaning products.png";
import img5 from "../../images/product_cards/fruits.jpg";
import img6 from "../../images/product_cards/staples.jpg";
import { useNavigate } from "react-router-dom";

function Cards() {
  let navigate = useNavigate();
  const cardnames = [
    "vegetables",
    "personalcare",
    "packagedfoods",
    "cleaningproducts",
    "fruits",
    "staples",
  ];
  const click = (a) => {
    navigate("/" + a);
  };
  return (
    <section className="cardshome" style={{ padding: "40px 5%", textAlign: "center" }}>
      <div style={{ marginBottom: "30px" }}>
        <span className="auth-badge" style={{ fontSize: "13px", padding: "6px 16px" }}>
          <i className="fas fa-leaf"></i> Shop By Category
        </span>
        <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#14532d", marginTop: "8px" }}>
          Freshness Delivered Daily
        </h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-2 col-md-4 col-sm-6 colelement homepagecard col-6">
          <img
            className="cardimg"
            src={img1}
            onClick={() => click(cardnames[0])}
            alt="Vegetables"
          />
          <p className="cardtext">Vegetables</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 colelement homepagecard col-6">
          <img
            className="cardimg"
            src={img6}
            onClick={() => click(cardnames[5])}
            alt="Staples"
          />
          <p className="cardtext">Staples</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 colelement homepagecard col-6">
          <img
            className="cardimg"
            src={img5}
            onClick={() => click(cardnames[4])}
            alt="Fruits"
          />
          <p className="cardtext">Fruits</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 colelement homepagecard col-6">
          <img
            className="cardimg"
            src={img3}
            onClick={() => click(cardnames[2])}
            alt="Packaged Food"
          />
          <p className="cardtext">Packaged Food</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 colelement homepagecard col-6">
          <img
            className="cardimg"
            src={img4}
            onClick={() => click(cardnames[3])}
            alt="Cleaning Products"
          />
          <p className="cardtext">Cleaning Products</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 colelement homepagecard col-6">
          <img
            className="cardimg"
            src={img2}
            onClick={() => click(cardnames[1])}
            alt="Personal Care"
          />
          <p className="cardtext">Personal Care</p>
        </div>
      </div>
    </section>
  );
}

export default Cards;
