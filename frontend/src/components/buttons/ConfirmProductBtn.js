import SearchProductContext from "../../context/SearchProductContext";
import { BUSINESS_NUMBER } from "../../data/Constants";
import classes from "../../css/ConfirmProductBtn.module.css";

import { useState, useEffect, useContext } from "react";

export default function ConfirmProductBtn({ enabled }) {
  const [confirmed, setConfirmed] = useState(false);
  const { formState } = useContext(SearchProductContext);
  useEffect(() => {}, [confirmed]);
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
  return (
    <button
      className={classes.button}
      type="submit"
      disabled={!enabled}
      onClick={confirmed ? contactHandler : confirmHandler}
    >
      {confirmed ? "Contact on What's App" : "Confirm Selections"}
    </button>
  );
}
