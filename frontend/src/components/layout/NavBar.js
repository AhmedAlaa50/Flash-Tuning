import { Link, useLocation } from "react-router-dom";
import classes from "./NavBar.module.css"; // Import the CSS module
import logo from "../../assets/ft2.jpg"; // Import the logo image

export default function NavBar() {
  const location = useLocation(); // Get the current route

  return (
    <nav className={classes.navbar}>
      <div className={classes.logoContainer}>
        <img src={logo} alt="Flash-Tuning Logo" className={classes.logo} />
        <h1 className={classes.title}>Flash Tuning</h1>
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
            location.pathname === "/ecu-flashing-services" ? classes.active : ""
          }
        >
          <Link to="/ecu-flashing-services">ECU Flashing Services</Link>
        </li>
        <li
          className={
            location.pathname === "/remote-tuning" ? classes.active : ""
          }
        >
          <Link to="/remote-tuning">Remote Tuning</Link>
        </li>
        <li
          className={location.pathname === "/dyno-tuning" ? classes.active : ""}
        >
          <Link to="/dyno-tuning">Dyno Tuning</Link>
        </li>
        <li className={location.pathname === "/contact" ? classes.active : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
