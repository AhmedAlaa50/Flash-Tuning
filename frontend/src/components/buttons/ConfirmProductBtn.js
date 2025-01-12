import { useState, useContext } from "react";
import SearchProductContext from "../../context/SearchProductContext";
import { BUSINESS_NUMBER } from "../../data/Constants";
import classes from "../../css/ConfirmProductBtn.module.css";

export default function ConfirmProductBtn({ enabled }) {
  const [confirmed, setConfirmed] = useState(false);
  const { formState } = useContext(SearchProductContext);

  function confirmHandler(event) {
    event.preventDefault();
    setConfirmed(true);
  }

  function contactHandler(event) {
    event.preventDefault();
    window.location.href =
      "https://wa.me/" +
      BUSINESS_NUMBER +
      "/?text=" +
      "I%27m%20interested%20in%20" +
      formState.make +
      "%20" +
      formState.model +
      "%20" +
      formState.year;
  }

  // Dynamically assign the button class based on the state
  const buttonClasses = `${classes.button} ${
    confirmed
      ? classes.green
      : formState.make && formState.model && formState.year
      ? classes.black
      : ""
  }`;

  return (
    <button
      className={buttonClasses}
      type="submit"
      disabled={!enabled}
      onClick={confirmed ? contactHandler : confirmHandler}
    >
      {confirmed && formState.make && formState.model && formState.year
        ? "Contact on What's App"
        : "Confirm Selections"}
    </button>
  );
}
