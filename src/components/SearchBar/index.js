// Styles
import { Wrapper } from "./SearchBar.styles";

const SearchBar = ({ onChange, value }) => {
  return (
    <Wrapper>
      <input type='text' onChange={onChange} value={value} />
    </Wrapper>
  );
};

export default SearchBar;
