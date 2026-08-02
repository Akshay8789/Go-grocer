import React, { useState, useEffect } from "react";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../elements/navbar.jsx";
import comingsoon from "../../images/comingsoon.png";
import { Link } from "react-router-dom";

function Addresses() {
  const navigate = useNavigate();
  const [imageSize, setImageSize] = useState(0.8);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const timer = setTimeout(() => {
      setImageSize(0.85); // Set the image size to 1 after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      <NavBar />
      <div className="bannersec" id="dashboardsec">
        <section className="dashboardcards" id="comingsoon">
          <img
            src={comingsoon}
            alt="coming soon"
            id="comingsoonimage"
            style={{
              transform: `scale(${imageSize})`,
              transition: "transform 3s",
            }}
          />
        </section>
      </div>
    </>
  );
}

export default Addresses;
