import "../../styles.css";
import { Link } from "react-router-dom";
import login from "../../images/user.png";
import cart from "../../images/cart.png";
import search from "../../images/search.png";
import { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase-config.js";
import { toast, ToastContainer } from "react-toastify";
import { MyContext } from "../../App.js";

const Navbarcomp = () => {
  const context = useContext(MyContext);
  const [authenticated, setAuthenticated] = useState(context?.authenticated || false);
  const [loginLink, setLoginLink] = useState("/login");
  const [name, setName] = useState("You");
  const auth = context?.auth || getAuth(app);

  useEffect(() => {
    const searchInput = document.getElementById("search");
    if (searchInput) {
      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSearchButton(e);
        }
      };
      searchInput.addEventListener("keydown", handleKeyDown);
      return () => searchInput.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  useEffect(() => {
    if (context?.user) {
      setAuthenticated(true);
      setLoginLink("/dashboard");
      if (context.user.displayName) {
        setName(context.user.displayName.substring(0, 20));
      }
    } else {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthenticated(true);
          setLoginLink("/dashboard");
          if (user.displayName) {
            setName(user.displayName.substring(0, 20));
          }
        } else {
          setAuthenticated(false);
          setLoginLink("/login");
        }
      });
      return () => unsubscribe();
    }
  }, [auth, context?.user]);

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
      <Link to="/" className="navitem" style={{ background: "transparent", padding: 0 }}>
        <h1 className="navbrand">
          <i className="fas fa-shopping-basket" style={{ color: "#ffffff", marginRight: "10px" }}></i>
          GoGrocers
        </h1>
      </Link>
      <div id="searchbar" style={{ display: "flex", alignItems: "center" }}>
        <form onSubmit={handleSearchButton} id="searchform" style={{ display: "flex", margin: 0 }}>
          <input
            autoComplete="off"
            type="text"
            className="search-bar"
            placeholder="Search fresh groceries..."
            id="search"
          />
          <button className="search-barbutton" type="submit">
            <i className="fas fa-search" style={{ color: "white" }}></i>
          </button>
        </form>
      </div>
      <Link to="/cart" className="navitem">
        <i className="fas fa-shopping-cart" style={{ marginRight: "6px" }}></i>
        Cart
      </Link>
      <Link to={loginLink} className="navitem">
        {authenticated === false ? (
          <>
            <i className="fas fa-user-circle" style={{ marginRight: "6px" }}></i>
            Sign In
          </>
        ) : (
          <>
            <i className="fas fa-user-check" style={{ marginRight: "6px" }}></i>
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
