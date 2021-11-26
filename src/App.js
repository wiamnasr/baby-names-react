// Importing data
import babyNames from "./babyNamesData.json";

// Components
import BabyNameCard from "./components/BabyNameCard";
import SearchBar from "./components/SearchBar";

const App = () => {
  const sortedBabyNames = babyNames.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

  return (
    <>
      <SearchBar />
      <h1 style={{ width: "100%" }}>Baby Names App</h1>
      {sortedBabyNames.map((baby) => (
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
