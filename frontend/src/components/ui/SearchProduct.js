import { useContext } from "react";

import OptionsList from "./OptionsList";
import SearchProductContext from "../../context/SearchProductContext";
import { ProductOptions } from "../../data/ProductOptions";
import ConfirmProductBtn from "../buttons/ConfirmProductBtn";
import ClearChoicesBtn from "../buttons/ClearChoicesBtn";
import classes from "../../css/SearchProduct.module.css";

export default function SearchProduct() {
  const { formState, changeOptionHandler } = useContext(SearchProductContext);
  return (
    <div className={classes.container}>
      <form className={classes.form}>
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
        <div className={classes.buttons}>
          <ClearChoicesBtn />
          <ConfirmProductBtn
            enabled={formState.model && formState.make && formState.year}
          />
        </div>
      </form>
    </div>
  );
}
