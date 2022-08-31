import React from 'react';
import PropTypes from 'prop-types';

function Button({
  children, click, sty, dataTest,
}) {
  return (
    <button
      type="button"
      className={`btn btn-primary pe-4 ps-4 fw-bold ${sty}`}
      onClick={click}
      data-testid={dataTest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  sty: '',
  children: '',
  click: () => {},
  dataTest: '',
};
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  click: PropTypes.func,
  sty: PropTypes.string,
  dataTest: PropTypes.string,
};

export default Button;
