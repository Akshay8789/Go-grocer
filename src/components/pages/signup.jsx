import React from "react";
import "../../styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../../firebase-config.js";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateUser from "../firestore.operations.files/createuser.js";
import UpdateCart from "../firestore.operations.files/updatecart.js";
import { MyContext } from "../../App";
import { useContext } from "react";

function SignUp() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const { cart } = useContext(MyContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, repassword } = formData;

    if (password !== repassword) {
      toast.error("Check password entered", {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            async function loginwithmail() {
              const user = userCredential.user;
              const token = await user.getIdToken();
              const userEmail = user.email;
              const userName = user.displayName;
              const userid = user.uid;
              if (token && typeof token === "string" && token !== "[object Promise]") {
                localStorage.setItem("token", token);
              }
              localStorage.setItem("authenticated", "true");
              localStorage.setItem("uid", userid);
              try {
                await CreateUser(userid, userEmail, userName);
                await UpdateCartonLogin(userid, cart);
                navigate("/");
              } catch (err) {
                toast.error(err.message, {
                  position: "top-right",
                  autoClose: 10000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }
            }
            loginwithmail();
          })
          .catch((error) => {
            let errorMessage = error.message;
            console.log(errorMessage);
            if (errorMessage === "Firebase: Error (auth/invalid-credential).") {
              errorMessage = "invalid credentials";
            }
            toast.error(errorMessage, {
              position: "top-right",
              autoClose: 10000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  async function UpdateCartonLogin(uid, cart) {
    UpdateCart(uid, cart);
  }

  const Loginwithgoogle = async () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        async function login() {
          const user = userCredential.user;
          const userName = user.displayName;
          const userEmail = user.email;
          const userid = user.uid;
          const token = await user.getIdToken();
          if (token && typeof token === "string" && token !== "[object Promise]") {
            localStorage.setItem("token", token);
          }
          localStorage.setItem("authenticated", "true");
          localStorage.setItem("uid", userid);
          try {
            await CreateUser(userid, userEmail, userName);
            await UpdateCartonLogin(userid, cart);
          } catch (err) {
            toast.error(err.message, {
              position: "top-right",
              autoClose: 10000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
          navigate("/");
        }
        login();
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <div>
      <div style={{ height: "80px", backgroundColor: "rgb(68, 184, 76)" }}>
        <Link to="/" className="navbrandlogin" id="loginlogo">
          <h2
            className="Title"
            style={{ paddingTop: "15px", paddingLeft: "15px" }}
          >
            GoGrocers
          </h2>
        </Link>
      </div>
      <div className="login containery">
        <h1 className="headinglogin">SIGN UP</h1>
        <hr className="loginline" />
        <form className="loginform" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="your_email@org.com"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="repassword"
            placeholder="re-enter password"
            value={formData.repassword}
            onChange={handleChange}
          />
          <button className="loginbutton" type="submit">
            Signup
          </button>
        </form>
        <hr className="loginline" id="line" />
        <button className="loginbutton" id="google" onClick={Loginwithgoogle}>
          <i class="fab fa-google icon" style={{ paddingRight: "10px" }}></i>
          Sign in with Google
        </button>
        <Link to="/login" className="createacc">
          Have an account ?
        </Link>
        <div></div>
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
  );
}

export default SignUp;
