import React from 'react';
import PropTypes from 'prop-types';

function Header({ children }) {
  // Css - style
  const width = {
    // height: '100px',
  };
  return (
    <header className="row bg-dark text-white p-3" style={width}>
      <h1 className="col-5 col-sm-3 m-2">logo</h1>
      { children }
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
