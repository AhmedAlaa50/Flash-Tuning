import classes from "../../css/DynoTuningPoster.module.css";
import poster from "../../assets/dyno.jpg";

export default function DynoTuningPoster() {
  return (
    <div className={classes.posterContainer}>
      <img src={poster} alt="Dyno Tuning" />
    </div>
  );
}
