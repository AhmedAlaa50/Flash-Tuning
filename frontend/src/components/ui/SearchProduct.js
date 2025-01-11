import { useContext } from "react";

import OptionsList from "./OptionsList";
import SearchProductContext from "../../context/SearchProductContext";
import { ProductOptions } from "../../data/ProductOptions";

export default function SearchProduct() {
  const { formState, changeOptionHandler } = useContext(SearchProductContext);
  return (
    <form>
      <div>
        <OptionsList
          word={"make"}
          options={Object.keys(ProductOptions)}
          enabled={true}
          changeOptionHandler={changeOptionHandler}
        />
        <OptionsList
          word={"model"}
          options={
            formState.make ? Object.keys(ProductOptions[formState.make]) : [""]
          }
          enabled={formState.make}
          changeOptionHandler={changeOptionHandler}
        />
        <OptionsList
          word={"year"}
          options={
            formState.make && formState.model
              ? ProductOptions[formState.make][formState.model]
              : [""]
          }
          enabled={formState.model && formState.make}
          changeOptionHandler={changeOptionHandler}
        />
      </div>
    </form>
  );
}
