import { RemoteTuningOptions } from "../../../data/RemoteTuningOptions";
import classes from "../../../css/Step1.module.css";

export default function Step1({ type }) {
  return (
    <div className={classes.stepContainer}>
      <h1 className={classes.stepHeading}>
        1{")"} Verify that your motorcycle is eligible for a remote tune.
      </h1>
      {RemoteTuningOptions[type].map((option, index) => {
        return (
          <div key={index} className={classes.optionContainer}>
            <span>{option}</span>
          </div>
        );
      })}
    </div>
  );
}
