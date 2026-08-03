import React, { useEffect, useState } from "react";
import veggiesbanner from "../../images/GoGrocers1.jpg";
import GoGrocers from "../../images/GoGrocers2.jpg";
import "../../styles.css";
import $ from "jquery";

function Banner() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 800 ? veggiesbanner : GoGrocers;
  const [display_status_2, setdisplay_status_2] = useState(false);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
    setdisplay_status_2(window.innerWidth <= 600);
  };

  useEffect(() => {
    if (display_status_2) {
      $(".cardtext").css("float", "right");
    } else {
      $(".cardtext").css("float", "none");
      $(".colelement").css("padding-top", "25px");
      $(".colelement").css("padding-bottom", "25px");
    }
  }, [display_status_2]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="bannerholder" style={{ padding: "20px 5%" }}>
      <section className="bannersec" id="bannerhome" style={{ borderRadius: "28px", overflow: "hidden", boxShadow: "0 20px 40px -15px rgba(22, 163, 74, 0.2)" }}>
        <div className="banner" id="bannerdiv" style={{ position: "relative" }}>
          <img
            className="veggiesbanner"
            src={imageUrl}
            alt="GoGrocers Banner"
            style={{ width: "100%", height: "auto", maxHeight: "420px", objectFit: "cover", borderRadius: "24px" }}
          />
        </div>
      </section>
      
      {/* Promotional Trust Badges Bar */}
      <div style={{
        display: "flex",
        justify: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px",
        marginTop: "24px",
        padding: "18px 24px",
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(12px)",
        borderRadius: "20px",
        border: "1px solid rgba(34, 197, 94, 0.15)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.04)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#14532d", fontWeight: "700", fontSize: "14px" }}>
          <i className="fas fa-bolt" style={{ color: "#16a34a", fontSize: "20px" }}></i>
          <span>30-Min Fast Delivery</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#14532d", fontWeight: "700", fontSize: "14px" }}>
          <i className="fas fa-leaf" style={{ color: "#16a34a", fontSize: "20px" }}></i>
          <span>100% Farm Fresh Quality</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#14532d", fontWeight: "700", fontSize: "14px" }}>
          <i className="fas fa-tags" style={{ color: "#16a34a", fontSize: "20px" }}></i>
          <span>Best Prices & Daily Offers</span>
        </div>
      </div>
    </div>
  );
}
export default Banner;
