import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import swal from "sweetalert";

const Register = () => {
  //   Using the navigate function
  const navigate = useNavigate();
  // ====================Adding the background Style=================
  const bgStyle = {
    backgroundImage: `url('/public/register2.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
  };
  // ====================Adding the background Style=================

  //   ======================Sweet alert===========================================
  //   const alertStyle = () => {
  //     swal({
  //       icon: "success",
  //     });
  //   };

  // ====================Destructuring the object=======================================
  const { createUser } = useContext(AuthContext);
  // =====================For getting the value from user=========================================================
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // =====================clear the input field============================================
    event.target.email.value = "";
    event.target.password.value = "";
    // ==================================================================================
    // Check The password is less than 6 characters, don't have a capital letter, don't have a special character
    if (password.length < 6) {
      swal({
        text: "Password is less than 6 characters!!!!!",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      swal({
        text: "Password must be at least One UpperCase Character!!!!!",
      });
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/.test(password)) {
      swal({
        text: "Password must be at least One Special Character!!!!!",
      });
      return;
    }
    //==================Create user in firebase==============================================================
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        swal({
          text: "Successfully Registered",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        swal({
          text: ("Have some issues", error.message),
        });
      });
  };
  return (
    <div className="mb-12 p-12" style={bgStyle}>
      <div style={overlayStyle}></div>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">REGISTER HERE</h1>
        </div>
        <div className="card flex-shrink-0 lg:w-full lg:max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter your name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text text-white font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-white font-bold"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="flex text-sm text-white font-bold">
              Already have an account? Please
              <Link to="/login" className="lg:-mt-3">
                <button className="btn btn-link text-white font-bold">
                  Login
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
