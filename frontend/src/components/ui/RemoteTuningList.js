import { Link } from "react-router-dom";

import classes from "../../css/RemoteTuningList.module.css";

export default function RemoteTuningList() {
  return (
    <ul className={classes.dropdownList}>
      <li>
        <Link to="/remote-tuning">Honda Tuning</Link>
      </li>
      <li>
        <Link to="/remote-tuning">Kawaski Tuning</Link>
      </li>
      <li>
        <Link to="/remote-tuning">Suzuki Tuning</Link>
      </li>
      <li>
        <Link to="/remote-tuning">Yamaha Tuning</Link>
      </li>
    </ul>
  );
}
