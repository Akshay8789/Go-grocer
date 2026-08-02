import React, { useEffect, useState } from "react";
import "../../styles.css";
import NavBar from "../elements/navbar";
import { toast, ToastContainer } from "react-toastify";
import GetOrder from "../firestore.operations.files/getorder";
import arrow from "../../images/accmedia/arrow.png";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase-config.js";
import { useNavigate, useLocation } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);
  const query = useQuery();

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const navigate = useNavigate();
  const auth = getAuth(app);
  useEffect(() => {
    async function getorderdata() {
      const uid = localStorage.getItem("uid");
      console.log(query.get("name"));
      if (query.get("status") === "arriving") {
        document.querySelector("#arriving").style.backgroundColor = "#40c04b90";
        document.querySelector("#arriving").style.color = "#ffffff";
        document.querySelector("#arriving").style.fontWeight = "600";
        document.querySelector("#completed").style.fontWeight = "300";
        document.querySelector("#completed").style.color = "#000000";
        document.querySelector("#completed").style.backgroundColor = "#f0f5f0";
        try {
          const orderdata = await GetOrder(uid);
          setOrders(orderdata.onorder);
        } catch (err) {
          toast.error("Error fetching user data", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(err);
        }
      } else if (query.get("status") === "completed") {
        document.querySelector("#completed").style.backgroundColor ="#40c04b90";
        document.querySelector("#completed").style.color = "#ffffff";
        document.querySelector("#arriving").style.fontWeight = "300";
        document.querySelector("#completed").style.fontWeight = "600";
        document.querySelector("#arriving").style.color = "#000000";
        document.querySelector("#arriving").style.backgroundColor = "#f0f5f0";
        try {
          const orderdata = await GetOrder(uid);
          setOrders(orderdata.completed);
          console.log(orderdata.completed);
        } catch (err) {
          toast.error("Error fetching user data", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(err);
        }
      }
    }
    getorderdata();
  }, [query]);

  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      toast.error("Please login to continue", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  });

  const formatOrderTime = (ordertime) => {
    if (ordertime instanceof Date) {
      return ordertime.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } else if (ordertime && ordertime.toDate) {
      const orderTime = ordertime.toDate();
      return orderTime.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } else {
      return "Invalid Date";
    }
  };

  return (
    <>
      <NavBar />
      <div className="orderindicator">
        <div
          className="orderindicatortab"
          id="arriving"
          onClick={() => {
            navigate("/profile/yourorders?status=arriving");
          }}
        >
          <span>Arriving</span>
        </div>
        <div
          className="orderindicatortab"
          id="completed"
          onClick={() => {
            navigate("/profile/yourorders?status=completed");
          }}
        >
          <span>Past Orders</span>
        </div>
      </div>
      <div className="bannersec" id="dashboardsec">
        <div style={{ width: "100%" }} className="ordersdiv">
          {orders.length === 0 ? (
            <div
              style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  opacity: "50%",
                  fontFamily: "sans-serif",
                  fontWeight: "600",
                }}
              >
                NO ORDERS
              </h1>
            </div>
          ) : (
            orders.map((order, index) => (
              <div key={index} className="order">
                <p className="orderid">Order id: {order.id}</p>
                <br />
                <div className="imageorderdiv">
                  {order.orderdetail.map((item, index) => (
                    <img
                      key={index}
                      src={item.src}
                      alt={item.name}
                      className="imageorder"
                    />
                  ))}
                </div>
                <br />
                <div className="ordertextdiv">
                  <p className="ordertime">
                    {formatOrderTime(order.ordertime)}
                  </p>
                  <p className="orderdetailbtn">
                    order details
                    <Link to={`/profile/yourorders/${order.id}`}>
                      <img
                        src={arrow}
                        alt="arrow"
                        className="orderlink"
                        style={{
                          height: "15px",
                          width: "15px",
                          opacity: "0.5",
                          marginLeft: "10px",
                        }}
                      />
                      <img
                        src={arrow}
                        className="orderlink"
                        alt="arrow"
                        style={{
                          height: "15px",
                          width: "15px",
                          opacity: "0.5",
                        }}
                      />
                    </Link>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
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
    </>
  );
}

export default Orders;
