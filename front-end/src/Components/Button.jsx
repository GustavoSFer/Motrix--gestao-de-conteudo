import React from 'react';
import PropTypes from 'prop-types';

function Button({
  children, click, sty,
}) {
  return (
    <button
      type="button"
      className={`btn btn-primary pe-4 ps-4 fw-bold ${sty}`}
      onClick={click}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  sty: '',
  children: '',
  click: () => {},
};
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  click: PropTypes.func,
  sty: PropTypes.string,
};

export default Button;
