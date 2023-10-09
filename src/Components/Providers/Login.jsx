import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import swal from "sweetalert";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // ====================Adding the background Style=================
  const bgStyle = {
    backgroundImage: `url('/public/logobanner.png')`,
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
  // ====================Destructuring the object=======================================
  const { signInUser, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext);
  // =====================For getting the value from user=========================================================
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    event.target.email.value = "";
    event.target.password.value = "";

    //==================Create user in firebase==============================================================
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        swal({
          text: "Successfully Login!!!",
        });
        // redirect to to the page where the use had clicked(wanted to watch details)
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        swal({
          text: ("Have some issues", error.message),
        });
      });
  };

  // =================================Handle Google Sign In================================================================
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        swal({
          text: "Successfully Login!!!",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        swal({
          text: ("Have some issues", error.message),
        });
      });
  };
  // =================================================================================================
  // =================================Handle GitHub Sign In================================================================
  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        console.log(result.user);
        swal({
          text: "Successfully Login!!!",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        swal({
          text: ("Have some issues", error.message),
        });
      });
  };
  // =================================================================================================
  return (
    <section>
      <div className="mb-12 p-12" style={bgStyle}>
        <div style={overlayStyle}></div>
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">LOGIN HERE</h1>
          </div>
          <div className="card flex-shrink-0 lg:w-full lg:max-w-sm shadow-2xl text-white">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="enter your email address"
                    className="input input-bordered text-black"
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
                    className="input input-bordered text-black"
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
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p>
                New here? Please
                <Link to="/register">
                  <button className="btn btn-link text-white font-bold">
                    Register
                  </button>
                </Link>
              </p>
              <p className="flex">
                <button onClick={handleGoogleSignIn} className="btn btn-ghost">
                  <AiFillGoogleCircle></AiFillGoogleCircle> Google
                </button>
                <button onClick={handleGitHubSignIn} className="btn btn-ghost">
                  <AiFillGithub></AiFillGithub>GitHub
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
