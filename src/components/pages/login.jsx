import React, { useContext } from "react";
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
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateUser from "../firestore.operations.files/createuser.js";
import UpdateCart from "../firestore.operations.files/updatecart.js";
import { MyContext } from "../../App";

function Login() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const { cart } = useContext(MyContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

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
    <div className="auth-wrapper">
      <nav className="auth-nav">
        <Link to="/" className="auth-brand" id="loginlogo">
          <div className="auth-brand-logo">
            <i className="fas fa-shopping-basket"></i>
          </div>
          <h2 className="auth-brand-title">GoGrocers</h2>
        </Link>
        <Link to="/" className="auth-nav-link">
          <i className="fas fa-arrow-left"></i> Home
        </Link>
      </nav>

      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-header">
            <span className="auth-badge">
              <i className="fas fa-leaf"></i> Organic & Fresh
            </span>
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Sign in to manage your grocery orders & savings</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label className="auth-label">Email Address</label>
              <div className="auth-input-wrapper">
                <i className="fas fa-envelope auth-input-icon"></i>
                <input
                  type="email"
                  name="email"
                  className="auth-input"
                  placeholder="your_email@org.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <label className="auth-label">Password</label>
              <div className="auth-input-wrapper">
                <i className="fas fa-lock auth-input-icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="auth-input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                </button>
              </div>
            </div>

            <button className="auth-submit-btn" type="submit">
              <span>Sign In</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>

          <div className="auth-divider">
            <span>Or continue with</span>
          </div>

          <button className="auth-google-btn" id="google" onClick={Loginwithgoogle}>
            <i className="fab fa-google" style={{ color: "#ea4335" }}></i>
            <span>Sign in with Google</span>
          </button>

          <div className="auth-footer">
            Don't have an account?
            <Link to="/signup" className="auth-footer-link">
              Create an account
            </Link>
          </div>
        </div>
      </main>

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

export default Login;
