import PropTypes from "prop-types";
import "./Header.scss";

function Header(props) {
  // Initialisation ------------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  // View ----------------------------------------
  return (
    <header>
      <h1>Fetch Endpoint Demo</h1>
      <p className="welcome">Welcome {props.loggedInUser}</p>
    </header>
  );
}

Header.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
};

export default Header;
