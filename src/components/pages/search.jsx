import React, { useContext, useEffect } from "react";
import "../../styles.css";
import $ from "jquery";
import Navbar from "../elements/navbar";

import pp from "../../images/packaged_product images/ppimg";
import cp from "../../images/cleaning_products images/cpimg";
import pc from "../../images/personal_care images/pcimg";
import staples from "../../images/staples images/stapleimg";
import vegetables from "../../images/vegetable images/vegimg";
import fruit from "../../images/fruits images/fruitimg";

import { MyContext } from "../../App";
import Fuse from "fuse.js";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Search() {
  const alldata = [...pp, ...cp, ...pc, ...staples, ...vegetables, ...fruit];
  const fuse = new Fuse(alldata, {
    keys: ["name"],
    includeScore: true,
    threshold: 0.4,
    shouldSort: true,
  });

  const query = useQuery();
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const [searchresult, setSearchresult] = useState([]);
  const { cart, updatecart, updatecartdec } = useContext(MyContext);

  const isItemInCart = (itemName) => {
    return cart.some((item) => item.name === itemName);
  };

  useEffect(() => {
    const result = fuse.search(query.get("name"));
    const resultdata = result.map((item) => item.item);
    setSearchresult(resultdata);
  }, []);

  return (
    <div className="vegetables">
      <Navbar />
      <section className="vegetablessec">
        <section className="cardsproduct">
          <div className="row">
            {searchresult.length !== 0 ? (
              searchresult.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-6 colelement cardbg "
                >
                  <div className="imgdiv">
                    <img className="cardimgproduct" src={item.src} alt="pic" />
                  </div>
                  <p className="cardtextproduct">{item.name}</p>
                  <div className="infodev">
                    {isItemInCart(item.name) ? (
                      <>
                        <button
                          className="cartbuttons"
                          style={{ scale: "0.8" }}
                          onClick={() => updatecart(item)}
                        >
                          +
                        </button>
                        <button
                          className="cartbuttons"
                          style={{ scale: "0.8" }}
                        >
                          {
                            cart.find((item) => item.name === item.name)
                              ?.frequency
                          }
                        </button>
                        <button
                          className="cartbuttons"
                          style={{ scale: "0.8" }}
                          onClick={() => updatecartdec(item)}
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
                            name: item.name,
                            price: item.price,
                            src: item.src,
                            priceint: item.priceint,
                            weight: item.weight,
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
                    <h4 className="productprice">{item.price}</h4>
                  </div>
                </div>
              ))
            ) : (
              <div style={{width:"100%",height:"30vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <h3 style={{width:"60vw",fontSize:"clamp(15px, 1.5vw, 2rem)",paddingTop:"50px",opacity:"60%",fontWeight:"600",display:"flex",justifyContent:"center"}}>No items found for your query</h3>
              </div>
            )}
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

export default Search;
