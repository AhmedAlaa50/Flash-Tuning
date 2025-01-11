import { useEffect, useState, useContext } from "react";

import OptionsList from "./OptionsList";
import SearchProductContext from "../../context/SearchProductContext";

export default function SearchProduct() {
  const { formState, changeOptionHandler } = useContext(SearchProductContext);

  return (
    <form>
      <div>
        <OptionsList
          word={"make"}
          options={["Yamaha", "Triumph", "Suzuki", "Kawasaki", "Honda"]}
          enabled={true}
          changeOptionHandler={changeOptionHandler}
        />
        <OptionsList
          word={"model"}
          options={["R1", "R6", "MT-09", "MT-07", "MT-03"]}
          enabled={formState.make}
          changeOptionHandler={changeOptionHandler}
        />
        <OptionsList
          word={"year"}
          options={["2022", "2021", "2020", "2019", "2018"]}
          enabled={formState.model && formState.make}
          changeOptionHandler={changeOptionHandler}
        />
      </div>
    </form>
  );
}
