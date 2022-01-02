import React from "react";

// Styles
import { Wrapper } from "./BabyNameCards.styles";

// Component
import BabyNameCard from "../BabyNameCard";

// Data
import babyNames from "../../babyNamesData.json";

const BabyNameCards = ({ userInput }) => {
  const sortedBabyNames = babyNames.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default BabyNameCards;
