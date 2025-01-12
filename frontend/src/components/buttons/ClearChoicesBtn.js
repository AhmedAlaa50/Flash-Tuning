import { useContext } from "react";

import SearchProductContext from "../../context/SearchProductContext";
import classes from "../../css/ClearChoicesBtn.module.css";

export default function ClearChoicesBtn() {
  const { resetChoicesHandler } = useContext(SearchProductContext);
  function clearChoicesHandler(event) {
    event.preventDefault();
    resetChoicesHandler();
  }
  return (
    <button className={classes.button} onClick={clearChoicesHandler}>
      Clear Choices
    </button>
  );
}
