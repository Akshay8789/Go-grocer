import React, { useContext } from "react";
import "../../styles.css";
import $ from "jquery";
import Navbar from "../elements/navbar";
import vegetables from "../../images/vegetable images/vegimg";
import { MyContext } from "../../App";

import Footer from "../elements/footer.jsx";

function Vegetables() {
  const { cart, updatecart, updatecartdec } = useContext(MyContext);

  const isItemInCart = (itemName) => {
    return cart.some((item) => item.name === itemName);
  };

  return (
    <div className="vegetables">
      <Navbar />
      <div style={{ padding: "30px 5% 10px", textAlign: "center" }}>
        <span className="auth-badge" style={{ fontSize: "13px", padding: "6px 16px" }}>
          <i className="fas fa-carrot"></i> 100% Farm Fresh
        </span>
        <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#14532d", marginTop: "8px" }}>
          Fresh Vegetables
        </h1>
        <p style={{ color: "#4b5563", fontSize: "15px" }}>Handpicked organic vegetables delivered straight from local farms</p>
      </div>

      <section className="vegetablessec" style={{ padding: "20px 5%" }}>
        <section className="cardsproduct">
          <div className="row">
            {vegetables.map((vegetable, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 colelement cardbg "
              >
                <div className="imgdiv">
                  <img
                    className="cardimgproduct"
                    src={vegetable.src}
                    alt={vegetable.name}
                  />
                </div>
                <p className="cardtextproduct">{vegetable.name}</p>
                <div className="infodev" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginTop: "12px" }}>
                  {isItemInCart(vegetable.name) ? (
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <button
                        className="cartbuttons"
                        onClick={() => updatecartdec(vegetable)}
                      >
                        -
                      </button>
                      <span style={{ fontWeight: "700", padding: "0 6px" }}>
                        {
                          cart.find((item) => item.name === vegetable.name)
                            ?.frequency
                        }
                      </span>
                      <button
                        className="cartbuttons"
                        onClick={() => updatecart(vegetable)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="productaddtocart"
                      onClick={() => {
                        updatecart({
                          name: vegetable.name,
                          price: vegetable.price,
                          src: vegetable.src,
                          priceint: vegetable.priceint,
                          weight: vegetable.weight,
                          unit: "g",
                          type: "vegetables",
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
                  <h4 className="productprice" style={{ margin: 0, fontWeight: "800", color: "#16a34a" }}>{vegetable.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default Vegetables;
