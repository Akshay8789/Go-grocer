import React, { useContext } from "react";
import "../../styles.css";
import $ from "jquery";
import Navbar from "../elements/navbar";
import cp from "../../images/cleaning_products images/cpimg";
import { MyContext } from "../../App";

function Cleaning_products() {
  const { cart, updatecart, updatecartdec } = useContext(MyContext);

  const isItemInCart = (itemName) => {
    return cart.some((item) => item.name === itemName);
  };

  return (
    <div className="vegetables">
      <Navbar />
      <section className="vegetablessec">
        <section className="cardsproduct">
          <div className="row">
            {cp.map((cpItem, index) => (
              <div
                id={index}
                className="col-lg-3 col-md-4 col-sm-6 colelement cardbg"
              >
                <div className="imgdiv">
                  <img className="cardimgproduct" src={cpItem.src} alt="pic" />
                </div>
                <p className="cardtextproduct">{cpItem.name}</p>
                <div className="infodev">
                  {isItemInCart(cpItem.name) ? (
                    // Display + and - buttons if the item is in the cart
                    <>
                      <button
                        className="cartbuttons"
                        style={{ scale: "0.8" }}
                        onClick={() => updatecart(cpItem)}
                      >
                        +
                      </button>
                      <button className="cartbuttons" style={{ scale: "0.8" }}>
                        {
                          cart.find((item) => item.name === cpItem.name)
                            ?.frequency
                        }
                      </button>
                      <button
                        className="cartbuttons"
                        style={{ scale: "0.8" }}
                        onClick={() => updatecartdec(cpItem)}
                      >
                        -
                      </button>
                    </>
                  ) : (
                    // Display ADD button if the item is not in the cart
                    <button
                      className="productaddtocart"
                      onClick={() => {
                        updatecart({
                          name: cpItem.name,
                          price: cpItem.price,
                          src: cpItem.src,
                          priceint: cpItem.priceint,
                          weight: cpItem.weight,
                          unit: "g",
                          type: "veg",
                        });

                        $("#addtocart").addClass("animatecart");
                        setTimeout(function () {
                          $("#addtocart").removeClass("animatecart");
                        }, 100);
                      }}
                    >
                      ADD
                    </button>
                  )}
                  <h4 className="productprice">{cpItem.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
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
    </div>
  );
}

export default Cleaning_products;
