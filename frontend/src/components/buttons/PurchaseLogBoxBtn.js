import classes from "../../css/PurchaseLogBoxBtn.module.css";

export default function PurchaseLogBoxBtn({ type }) {
  function clickHandler() {
    window.open(
      "https://www.woolichracing.com/products/" +
        type +
        "/" +
        type +
        "-ecu-flashing.aspx#productTable",
      "_blank"
    );
  }
  return (
    <button className={classes.button} type="button" onClick={clickHandler}>
      Purchase Log Box from Woolich Racing
    </button>
  );
}
