import "../../styles.css";
import { Link } from "react-router-dom";
import login from "../../images/user.png";
import cart from "../../images/cart.png";
import search from "../../images/search.png";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase-config.js";
import { toast, ToastContainer } from "react-toastify";

const Navbarcomp = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loginLink, setLoginLink] = useState("/login");
  const [name, setName] = useState("You");
  const auth = getAuth(app);

  useEffect(() => {
    onLoad();
    document.getElementById("search").addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearchButton(e);
      }
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
        setLoginLink("/dashboard");
        setName(user.displayName);
      } else {
        setAuthenticated(false);
        setLoginLink("/login");
      }
    });
  }, [auth]);

  async function onLoad() {
    const name = localStorage.getItem("name");
    if (name && name !== "" && name !== "null") {
      const truncatedName = name.substring(0, 20);
      setName(truncatedName);
    }
    if (localStorage.getItem("authenticated") === "true") {
      setAuthenticated("true");
      setLoginLink("/dashboard");
    }
  }

  async function handleSearchButton(e) {
    e.preventDefault();
    const search = document.getElementById("search").value;
    if (search === "") {
      toast.warning("Please enter a search query", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      window.location.href = `/search?name=${search}`;
    }
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div className="topnav" id="myTopnav">
      <Link to="/" className="navitem">
        <h1 className="navbrand">GoGrocers</h1>
      </Link>
      <Link id="searchbar">
        <form onSubmit={handleSearchButton} id="searchform">
          <input
            autoComplete="off"
            type="text"
            className="search-bar"
            placeholder="search"
            id="search"
          />
          <button className="search-barbutton" type="submit">
            <img src={search} alt="search icon" id="searchicon" />
          </button>
        </form>
      </Link>
      <Link to="/cart" className="navitem">
        <img src={cart} alt="cart" className="navicon" />
        CART
      </Link>
      <Link to={loginLink} className="navitem">
        {authenticated === false ? (
          <>
            <img src={login} alt="login" className="navicon" />
            SIGN&nbsp;IN
          </>
        ) : (
          <>
            <img src={login} alt="login" className="navicon" />
            {name}
          </>
        )}
      </Link>
      <Link className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </Link>
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Navbarcomp;
