import { useEffect, useState } from "react";

import OptionsList from "./OptionsList";

export default function SearchProduct() {
  const [formState, setFormState] = useState({
    make: "",
    model: "",
    year: "",
  });
  useEffect(() => {
    console.log(formState);
  }, [formState]);

  function changeOptionHandler(word, value) {
    if (word === "make") {
      setFormState({ make: value, model: "", year: "" });
    } else if (word === "model") {
      setFormState({ ...formState, model: value, year: "" });
    } else setFormState({ ...formState, year: value });
  }

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
