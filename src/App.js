// Importing data
import babyNames from "./babyNamesData.json";

// Components
import BabyNameCard from "./components/BabyNameCard";
import SearchBar from "./components/SearchBar";

// Hooks
import { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState("");
  console.log(userInput);

  const userInputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const sortedBabyNames = babyNames.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

  return (
    <>
      <SearchBar onChange={userInputChangeHandler} value={userInput} />
      <h1 style={{ width: "100%" }}>Baby Names App</h1>
      {userInput.length > 0
        ? sortedBabyNames
            .filter((baby) =>
              baby.name.toUpperCase().includes(userInput.toUpperCase())
            )
            .map((baby) => (
              <BabyNameCard
                key={baby.id}
                babyName={baby.name}
                color={baby.sex === "m" ? "green" : "orange"}
                onClick={() => console.log(baby.name)}
              />
            ))
        : sortedBabyNames.map((baby) => (
            <BabyNameCard
              key={baby.id}
              babyName={baby.name}
              color={baby.sex === "m" ? "green" : "orange"}
              onClick={() => console.log(baby.name)}
            />
          ))}
    </>
  );
};

export default App;

// Important for sorting data in alphabetical order
// const showsArr = getAllShows().sort((a, b) =>
//   a.name > b.name ? 1 : b.name > a.name ? -1 : 0
// );
