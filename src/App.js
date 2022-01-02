// Components
import SearchBar from "./components/SearchBar";
import BabyNameCards from "./components/BabyNameCards/BabyNameCards";

// Hooks
import { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState("");

  const userInputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <>
      <SearchBar onChange={userInputChangeHandler} value={userInput} />
      <h1 style={{ width: "100%" }}>Baby Names App</h1>
      <BabyNameCards userInput={userInput} />
    </>
  );
};

export default App;
