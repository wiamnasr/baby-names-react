// Proptypes
import PropTypes from "prop-types";

import { Wrapper } from "./BabyNameCard.styles";

const BabyNameCard = ({ babyName, color, onClick }) => (
  <Wrapper onClick={onClick} style={{ backgroundColor: color }}>
    <h3>{babyName}</h3>
  </Wrapper>
);

BabyNameCard.defaultProps = {
  babyName: "Munchkin",
  color: "purple",
};

BabyNameCard.propTypes = {
  babyName: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default BabyNameCard;
