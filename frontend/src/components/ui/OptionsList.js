import {
  capitalizeFirstLetter,
  capitalizeAll,
} from "../../utils/CapitalizeString";

export default function OptionsList({
  word,
  options,
  enabled,
  changeOptionHandler,
}) {
  return (
    <div>
      <label htmlFor={word}>{capitalizeAll(word)}</label>
      <select
        id={word}
        name={word}
        defaultValue={"Select " + capitalizeFirstLetter(word)}
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
