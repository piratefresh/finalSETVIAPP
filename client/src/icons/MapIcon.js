import React from "react";
import PropTypes from "prop-types";

function MapIcon({className, fill}) {
  return (
    <svg width="27" height="27" className={className}>
      <path
        d="M9 0L.54 2.85c-.315.105-.54.375-.54.72v22.68c0 .414.336.75.75.75l.24-.045L9 23.85 18 27l8.46-2.85c.315-.105.54-.375.54-.72V.75a.75.75 0 0 0-.75-.75l-.24.045L18 3.15 9 0zM7.5 3.675v17.55L3 22.965V5.19l4.5-1.515zm3 .03l6 2.1v17.49l-6-2.1V3.705zM24 4.05v17.76l-4.5 1.515V5.79L24 4.05zm-17.31.9L3.855 5.955V9.18L6.69 8.175V4.95zm0 4.125L3.855 10.08v3.225L6.69 12.3V9.075zm0 4.125l-2.835 1.005v3.225l2.835-1.005V13.2zm0 4.125L3.855 18.33v3.225L6.69 20.55v-3.225z"
        fill={fill}
      />
    </svg>
  );
}

MapIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

MapIcon.defaultProps = {
  className: undefined
};

export default MapIcon;
