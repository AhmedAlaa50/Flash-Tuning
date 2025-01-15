import { Link } from "react-router-dom";

import classes from "../../css/RemoteTuningList.module.css";

export default function RemoteTuningList() {
  return (
    <ul className={classes.dropdownList}>
      <li>
        <Link to="/remote-tuning/honda">Honda Tuning</Link>
      </li>
      <li>
        <Link to="/remote-tuning/kawasaki">Kawasaki Tuning</Link>
      </li>
      <li>
        <Link to="/remote-tuning/suzuki">Suzuki Tuning</Link>
      </li>
      <li>
        <Link to="/remote-tuning/yamaha">Yamaha Tuning</Link>
      </li>
    </ul>
  );
}
