// Styles
import { Wrapper } from "./SearchBar.styles";

import React, { useState, useEffect, useRef } from "react";

import PropTypes from "prop-types";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <input
        type='text'
        placeholder='Search Baby Name'
        onChange={(event) => setState(event.currentTarget.value)}
        value={state}
      />
    </Wrapper>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
