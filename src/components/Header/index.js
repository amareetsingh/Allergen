import React from "react";
import { NavLink } from "react-router-dom";

const Index = () => {
  const token = localStorage.getItem("sessionToken");

  const handleLogout = ()=>{
    localStorage.clear()
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
          </ul>
          <form className="d-flex gap-4 ">
            <button className="btn btn-outline-success" type="submit">
              Menu
            </button>
            {!token ? (
              <NavLink className="btn btn-outline-success" to="/login">
                login
              </NavLink>
            ) : (
              <button className="btn btn-outline-success" type="submit" onClick={handleLogout}>
                logout
              </button>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Index;
