import { Link, useLocation } from "react-router-dom";

import { capitalizeFirstLetter } from "../../utils/CapitalizeString";
import classes from "../../css/RemoteTuningList.module.css";

export default function RemoteTuningList() {
  const remoteTuningList = ["honda", "kawasaki", "suzuki", "yamaha"];
  const location = useLocation();
  return (
    <ul className={classes.dropdownList}>
      {remoteTuningList.map((tuning, index) => (
        <li
          key={index}
          className={
            tuning == location.pathname.substring(15) ? classes.active : ""
          }
        >
          <Link to={`/remote-tuning/${tuning}`}>
            {capitalizeFirstLetter(tuning)} Tuning
          </Link>
        </li>
      ))}
    </ul>
  );
}
