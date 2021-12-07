// Styles
import { Wrapper } from "./SearchBar.styles";

// import React, { useState } from "react";

// import PropTypes from "prop-types";

const SearchBar = ({onChange, value}) => {
  
  return (
    <Wrapper>
      <input type='text' onChange={onChange} value={value} />
    </Wrapper>
  );
};

// SearchBar.propTypes = {
//   callback: PropTypes.func,
// };

export default SearchBar;
