import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import classes from "./NavBar.module.css"; // Import the CSS module
import logo from "../../assets/ft2.jpg"; // Import the logo image
import { BUSINESS_NAME } from "../../data/Constants";
import RemoteTuningList from "../ui/RemoteTuningList";

export default function NavBar() {
  const location = useLocation(); // Get the current route
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.logoContainer}>
        <img src={logo} alt="Flash-Tuning Logo" className={classes.logo} />
        <h1 className={classes.title}>{BUSINESS_NAME}</h1>
      </div>
      <ul className={classes.navLinks}>
        <li className={location.pathname === "/" ? classes.active : ""}>
          <Link to="/">Home</Link>
        </li>
        <li
          className={
            location.pathname === "/previous-work" ? classes.active : ""
          }
        >
          <Link to="/previous-work">Previous Work</Link>
        </li>
        <li
          className={
            location.pathname === "/ecu-flashing" ? classes.active : ""
          }
        >
          <Link to="/ecu-flashing">ECU Flashing</Link>
        </li>
        <li
          className={`${classes.dropdown} ${
            location.pathname === "/remote-tuning" ? classes.active : ""
          }`}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <span className={classes.dropdownLabel}>Remote Tuning</span>
          {isDropdownVisible && (
            <RemoteTuningList toggleDropdown={toggleDropdown} />
          )}
        </li>
        <li
          className={location.pathname === "/dyno-tuning" ? classes.active : ""}
        >
          <Link to="/dyno-tuning">Dyno Tuning</Link>
        </li>
      </ul>
    </nav>
  );
}
