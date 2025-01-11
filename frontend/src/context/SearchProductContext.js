import { createContext, useState, useEffect } from "react";

const SearchProductContext = createContext();

export default SearchProductContext;

export function SearchProductContextProvider({ children }) {
  const [formState, setFormState] = useState({
    make: "",
    model: "",
    year: "",
  });
  function changeOptionHandler(word, value) {
    if (word === "make") {
      setFormState({ make: value, model: "", year: "" });
    } else if (word === "model") {
      setFormState({ ...formState, model: value, year: "" });
    } else setFormState({ ...formState, year: value });
  }
  const context = {
    formState,
    changeOptionHandler,
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <SearchProductContext.Provider value={context}>
      {children}
    </SearchProductContext.Provider>
  );
}
