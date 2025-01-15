import Step1 from "./remote-tuning-steps/Step1";
import Step2 from "./remote-tuning-steps/Step2";
import Step3 from "./remote-tuning-steps/Step3";
import classes from "../../css/RemoteTuningSteps.module.css";

export default function RemoteTuningSteps({ type }) {
  return (
    <div className={classes.stepsContainer}>
      <h1 className={classes.stepsHeading}>Remote Tuning Steps</h1>
      <Step1 type={type} />
      <div className={classes.stepDivider}></div> {/* Optional Divider */}
      <Step2 type={type} />
      <div className={classes.stepDivider}></div> {/* Optional Divider */}
      <Step3 />
    </div>
  );
}
