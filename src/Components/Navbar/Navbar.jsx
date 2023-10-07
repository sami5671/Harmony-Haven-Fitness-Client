import { Link, NavLink } from "react-router-dom";
import userPicture from "../../assets/userlogo.jpg";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import swal from "sweetalert";
const Navbar = () => {
  // destructure the AuthContext
  const { user, logout } = useContext(AuthContext);

  // ==========================For Logging out =================================================
  const handleLogout = () => {
    logout()
      .then(() => {
        swal({
          text: "Successfully Registered",
        });
      })
      .catch((error) => {
        console.error(error);
        swal({
          text: ("Have some issues", error.message),
        });
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/activities">Activities</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
    </>
  );
  return (
    <>
      {/* navbar start here */}
      <section className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start lg:mr-4">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <img
              className="w-1/2 lg:w-1/6 rounded-lg"
              src="/src/assets/logo.jpg"
              alt=""
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-2 gap-10">{links}</ul>
          </div>

          {/* sign in and out */}

          {/* checking the user is present(if present the Button will show logout otherwise will show login in the system) */}
          {user ? (
            <>
              <div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-6 lg:w-10 rounded-full">
                    <img src={userPicture} alt="" />
                  </div>
                </label>
              </div>
              <div className="hidden lg:block">
                <span>{user.email}</span>
              </div>

              <button onClick={handleLogout} className="btn btn-ghost">
                LOG OUT
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn font-bold">LOGIN HERE</button>
            </Link>
          )}
          {/* sign in and out */}
        </div>
        {/* Navbar end here  */}
      </section>
    </>
  );
};

export default Navbar;
