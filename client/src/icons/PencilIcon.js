import React from "react";
import PropTypes from "prop-types";

function PencilIcon({ className, fill }) {
  return (
    <svg width="12" height="12" className={className}>
      <path
        d="M11.801 2.754a.68.68 0 0 0 0-.96L10.21.198a.676.676 0 0 0-.959 0L8 1.446 10.55 4 11.8 2.754zM0 9.47V12h2.532L10 4.53 7.468 2 0 9.47z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
  );
}

PencilIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

PencilIcon.defaultProps = {
  className: undefined
};

export default PencilIcon;
