import classes from "../../../css/Step3.module.css";
import {
  BUSINESS_NAME,
  BUSINESS_EMAIL,
  BUSINESS_NUMBER,
} from "../../../data/Constants";
import MailTo from "../../../utils/MailTo";

export default function Step3() {
  return (
    <div className={classes.stepContainer}>
      <h1 className={classes.stepHeading}>
        3{")"} Contact {BUSINESS_NAME} to schedule you remote tune AFTER you've
        installed the Log Box on your motorcycle.
      </h1>
      <div className={classes.contactContainer}>
        <span className={classes.contactText}>
          <MailTo
            email={BUSINESS_EMAIL}
            subject="Remote Tune Request"
            body="Hello, I would like to schedule a remote tune for my motorcycle. Please let me know the next steps."
          >
            {BUSINESS_EMAIL}
          </MailTo>
        </span>
        <span className={classes.contactText}>
          <a href={"tel:+" + BUSINESS_NUMBER}> {"+" + BUSINESS_NUMBER} </a>
        </span>
      </div>
    </div>
  );
}
