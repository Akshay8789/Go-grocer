import React, { useState } from "react";
import "../../styles.css";
import NavBar from "../elements/navbar.jsx";
import UpdateUser from "../firestore.operations.files/updateuser.js";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPassword() {
  <section className="dashboardcards" id="addresssec">
    <div className="address">
      <h4>Reset Password</h4>
      <form>
        <div>
          <label htmlFor="password">password</label>
          <br />
          <input type="text" name="password" />
          <br />
          <label htmlFor="repassword">confirm password</label>
          <br />
          <input type="text" name="password" />
          <br />
        </div>
      </form>
    </div>
  </section>;
}

function EditProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
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
    const name = e.target.name.value;
    const phonenumber = e.target.phonenumber.value;
    const uid = localStorage.getItem("uid");
    await UpdateUser(uid, name, phonenumber);
    toast.success("Updated", {
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
      navigate("/profile");
    }, 3000);
  };
  return (
    <>
      <NavBar />
      <div className="bannersec" id="dashboardsec">
        <section className="dashboardcards" id="addresssec">
          <div className="address">
            <h4>Profile</h4>
            <form onSubmit={handleSubmit}>
              <div className="addressinput">
                <div>
                  <label htmlFor="name">full Name</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="phonenumber" id="statelabel">
                    Phone number
                  </label>
                  <br />
                  <input
                    type="text"
                    name="phonenumber"
                    id="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                  />
                  <br />
                </div>
              </div>
              <button className="loginbutton" type="submit" id="addressbutton">
                Submit
              </button>
            </form>
          </div>
        </section>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default EditProfile;
