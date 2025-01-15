import PurchaseLogBoxBtn from "../../buttons/PurchaseLogBoxBtn";
import classes from "../../../css/Step2.module.css";
import { BUSINESS_NAME } from "../../../data/Constants";

export default function Step2({ type }) {
  return (
    <div className={classes.stepContainer}>
      <h1 className={classes.stepHeading}>
        2{")"} Purchase Log Box from Woolich Racing Be sure to purchase the
        correct log box for your motorcycle. This is just an example.
      </h1>
      <span className={classes.exampleText}>
        Ensure you pick the log box suited for your specific model.
      </span>
      <PurchaseLogBoxBtn type={type} />
      <p className={classes.noteText}>
        NOTE: You are not purchasing the log box from {BUSINESS_NAME}. You are
        purchasing from Woolich Racing. This is what you need to install on your
        motorcycle.
      </p>
    </div>
  );
}
