import { useEffect, useContext } from "react";

import {
  capitalizeFirstLetter,
  capitalizeAll,
} from "../../utils/CapitalizeString";
import SearchProductContext from "../../context/SearchProductContext";

export default function OptionsList({
  word,
  options,
  enabled,
  changeOptionHandler,
}) {
  const { formState } = useContext(SearchProductContext);
  useEffect(() => {}, [formState.make, formState.model]);
  return (
    <div>
      <label htmlFor={word}>{capitalizeAll(word)}</label>
      <select
        id={word}
        name={word}
        defaultValue={"Select " + capitalizeFirstLetter(word)}
        value={formState[word]}
        disabled={!enabled}
        //get the selected value and pass it to the changeOptionHandler
        onChange={(event) => changeOptionHandler(word, event.target.value)}
      >
        <option value={""}>All</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
