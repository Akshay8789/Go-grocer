import React, { useContext } from "react";
import "../../styles.css";
import $ from "jquery";
import Navbar from "../elements/navbar";
import fruit from "../../images/fruits images/fruitimg";
import { MyContext } from "../../App";

function Fruits() {
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
            {fruit.map((fruit, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 colelement cardbg "
              >
                <div className="imgdiv">
                  <img className="cardimgproduct" src={fruit.src} alt="pic" />
                </div>
                <p className="cardtextproduct">{fruit.name}</p>
                <div className="infodev">
                  {isItemInCart(fruit.name) ? (
                    <>
                      <button
                        className="cartbuttons" style={{scale:'0.8'}}
                        onClick={() => updatecart(fruit)}
                      >
                        +
                      </button>
                      <button className="cartbuttons" style={{scale:'0.8'}}>
                        {
                          cart.find((item) => item.name === fruit.name)
                            ?.frequency
                        }
                      </button>
                      <button
                        className="cartbuttons" style={{scale:'0.8'}}
                        onClick={() => updatecartdec(fruit)}
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
                          name: fruit.name,
                          price: fruit.price,
                          src: fruit.src,
                          priceint: fruit.priceint,
                          weight: fruit.weight,
                          unit: "gm",
                          type: "fruits",
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
                  <h4 className="productprice">{fruit.price}</h4>
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

export default Fruits;
