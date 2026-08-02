import React, { useContext } from "react";
import "../../styles.css";
import $ from "jquery";
import Navbar from "../elements/navbar";
import pc from "../../images/personal_care images/pcimg";
import { MyContext } from "../../App";

function Personal_care() {
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
            {pc.map((pcItem, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 colelement cardbg"
              >
                <div className="imgdiv">
                  <img className="cardimgproduct" src={pcItem.src} alt="pic" />
                </div>
                <p className="cardtextproduct">{pcItem.name}</p>
                <div className="infodev">
                  {isItemInCart(pcItem.name) ? (
                    // Display + and - buttons if the item is in the cart
                    <>
                      <button
                        className="cartbuttons"
                        style={{ scale: "0.8" }}
                        onClick={() => updatecart(pcItem)}
                      >
                        +
                      </button>
                      <button className="cartbuttons" style={{ scale: "0.8" }}>
                        {
                          cart.find((item) => item.name === pcItem.name)
                            ?.frequency
                        }
                      </button>
                      <button
                        className="cartbuttons"
                        style={{ scale: "0.8" }}
                        onClick={() => updatecartdec(pcItem)}
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
                          name: pcItem.name,
                          price: pcItem.price,
                          src: pcItem.src,
                          priceint: pcItem.priceint,
                          weight: pcItem.weight,
                          unit: "gm",
                          type: "personal care",
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
                  <h4 className="productprice">{pcItem.price}</h4>
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

export default Personal_care;
