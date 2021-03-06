import React from "react";
import PropTypes from "prop-types";

function SettingsIcon({className, fill}) {
  return (
    <svg width="34" height="34" className={className}>
      <path
        d="M22.219 15.725l-1.53 1.564C19.465 18.513 18.7 19.55 18.7 22.1h-3.4v-.85c0-1.887.765-3.587 1.989-4.811l2.108-2.142A3.324 3.324 0 0 0 20.4 11.9a3.4 3.4 0 1 0-6.8 0h-3.4a6.8 6.8 0 1 1 13.6 0 5.44 5.44 0 0 1-1.581 3.825zM18.7 28.9h-3.4v-3.4h3.4v3.4zM17 0C7.611 0 0 7.611 0 17a17 17 0 0 0 34 0c0-9.401-7.65-17-17-17z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  );
}

SettingsIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

SettingsIcon.defaultProps = {
  className: undefined
};

export default SettingsIcon;
