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
    <section className="cardshome">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-6 colelement homepagecard col-6">
          <img
            className="cardimg"
            src={img1}
            onClick={() => click(cardnames[0])}
            alt="pic"
          />
          <p className="cardtext">Vegetables</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 colelement homepagecard col-6">
          <img
            className="cardimg"
            src={img6}
            onClick={() => click(cardnames[5])}
            alt="pic"
          />
          <p className="cardtext">Staples</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 colelement homepagecard col-6">
          <img
            className="cardimg"
            src={img5}
            onClick={() => click(cardnames[4])}
            alt="pic"
          />
          <p className="cardtext">Fruits</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 colelement homepagecard col-6">
          <img
            className="cardimg"
            src={img3}
            onClick={() => click(cardnames[2])}
            alt="pic"
          />
          <p className="cardtext">Packaged Food</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 colelement homepagecard col-6">
          <img
            className="cardimg"
            src={img4}
            onClick={() => click(cardnames[3])}
            alt="pic"
          />
          <p className="cardtext">Cleaning Products</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 colelemen homepagecard col-6">
          <img
            className="cardimg"
            src={img2}
            onClick={() => click(cardnames[1])}
            alt="pic"
          />
          <p className="cardtext">Personal Care</p>
        </div>
      </div>
    </section>
  );
}

export default Cards;
