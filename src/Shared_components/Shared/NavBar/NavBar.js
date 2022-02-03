import React, { useState } from "react";
import "./NavBar.css";
import Logo from "../citiLordlogo.png.png";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
} from "@material-ui/core";
import SearchShortlet from "../../../Pages/Home/components/DialogSearchBox/SearchShortlet/SearchShortlet";
import SearchLonglet from "../../../Pages/Home/components/DialogSearchBox/SearchLonglet/SearchLonglet";
import SearchForSale from "../../../Pages/Home/components/DialogSearchBox/SearchForSale/SearchForSale";
import { Close } from "@material-ui/icons";

const NavBar = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };
  const [state1, setState1] = useState(false);

  const toggleDrawer1 = (open) => (event) => {
    setState1(open);
  };

  const [state2, setState2] = useState(false);

  const toggleDrawer2 = (open) => (event) => {
    setState2(open);
  };

  const List = () => (
    <div>
      {/* <SearchShortlet /> */}
      {/* <Link to="/contact">Hello</Link> */}
    </div>
  );

  return (
    <div className="custom-nav-container">
      <nav className="navbar navbar-expand-lg navbar-dark custom-nav-bar px-3">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="/">
            <img className="" src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler "
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle custom-dropdown-link"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Rent
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" onClick={toggleDrawer(true)}>
                      Short Let
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={toggleDrawer1(true)}>
                      Long Let
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={toggleDrawer2(true)}>
                  Sell
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/tenants">
                  Tenants
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle custom-dropdown-link"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Landlord
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/landlord-renter">
                      Renter
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/landlord-seller">
                      Seller
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <button className="my-citi-lord-btn btn btn-default" type="submit">
              My Citi Lord
            </button>
          </div>
        </div>
      </nav>

      {/* Dialog Search Box Start */}

      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"New Landlord?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you are new to City Lord and would like a property valuation,
            please complete the form and a member of our staff team will contact
            you. <Link to="/free-valuation">Please click here</Link>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog> */}

      {/* Dialog Search Box End  */}

      {/* Drawer Start */}

      <Drawer
        anchor={"top"}
        open={state}
        onClose={toggleDrawer(false)}
        style={{ height: "100px", width: "50%" }}
      >
        {<SearchShortlet event={toggleDrawer(false)} />}
        <div className="drawer-icon-container">
          <Close className="drawer-icon" onClick={toggleDrawer(false)} />
        </div>
      </Drawer>
      <Drawer
        anchor={"top"}
        open={state1}
        onClose={toggleDrawer1(false)}
        style={{ height: "100px", width: "50%" }}
      >
        {<SearchLonglet event1={toggleDrawer1(false)} />}
        <div className="drawer-icon-container">
          <Close className="drawer-icon" onClick={toggleDrawer1(false)} />
        </div>
      </Drawer>
      <Drawer
        anchor={"top"}
        open={state2}
        onClose={toggleDrawer1(false)}
        style={{ height: "100px", width: "50%" }}
      >
        {<SearchForSale event2={toggleDrawer2(false)} />}
        <div className="drawer-icon-container">
          <Close className="drawer-icon" onClick={toggleDrawer2(false)} />
        </div>
      </Drawer>

      {/* Drawer End */}
    </div>
  );
};

export default NavBar;
