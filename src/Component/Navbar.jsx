import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Link } from "react-router-dom";

const Navbar = () => {
  const open = () => {
    if (document.getElementById("check").classList.contains("SideNavBar")) {
      document.getElementById("check").classList.toggle("fully");
      document.getElementById("grid2").classList.toggle("hidden");
    } else {
      document.getElementById("check").classList.toggle("SideNavBar");
      document.getElementById("show").style.display = "grid2";
    }
  };

  return (
    <div className="nav">
      <div className="SideNavBar" id="check">
        <h1>Ameed Faridi</h1>
        <DehazeIcon className="bar" fontSize="large" onClick={open} id="hide" />
        <ul style={{ listStyle: "none", fontSize: "1.5rem" }}>
          <li>
            <Link to="/">
              <HomeRoundedIcon fontSize="large" className="icon" />
              <p id="para">Home</p>
            </Link>
          </li>
          <li>
            <Link to="income">
              <AttachMoneyRoundedIcon fontSize="large" className="icon" />
              <p id="para">Income</p>
            </Link>
          </li>
          <li>
            <Link to="expense">
              <CreditCardRoundedIcon fontSize="large" className="icon" />
              <p id="para">Expense</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
