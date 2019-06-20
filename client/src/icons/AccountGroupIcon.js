import React from "react";
import PropTypes from "prop-types";

function AccountGroupIcon({ className, fill }) {
  return (
    <svg width="29" height="17" className={className}>
      <path
        d="M14.5 0c-2.184 0-3.955 1.756-3.955 3.923s1.771 3.923 3.955 3.923 3.955-1.756 3.955-3.923S16.684 0 14.5 0zM6.59 2.838c-1.82 0-3.295 1.463-3.295 3.269 0 .867.348 1.699.966 2.312a3.309 3.309 0 0 0 2.33.957c1.16 0 2.175-.601 2.755-1.49-.883-1.112-1.437-2.46-1.437-3.963 0-.261 0-.523.053-.785a3.23 3.23 0 0 0-1.371-.3zm15.82 0c-.489 0-.95.104-1.372.3.053.262.053.524.053.785 0 1.504-.554 2.85-1.437 3.962.58.89 1.595 1.491 2.755 1.491.874 0 1.712-.344 2.33-.957a3.256 3.256 0 0 0 .966-2.312c0-.867-.348-1.699-.966-2.312a3.309 3.309 0 0 0-2.33-.957zm-7.91 7.624c-2.636 0-7.91 1.307-7.91 3.923V17h15.82v-2.615c0-2.616-5.274-3.923-7.91-3.923zM4.838 11.73C2.636 12.11 0 13.13 0 14.816V17h3.955v-2.615c0-1.02.382-1.923.883-2.655zm19.324 0c.501.732.883 1.635.883 2.655V17H29v-2.184c0-1.687-2.636-2.707-4.838-3.086z"
        fill="#1F98F4"
        fillRule="nonzero"
      />
    </svg>
  );
}

AccountGroupIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

AccountGroupIcon.defaultProps = {
  className: undefined,
  fill: "#708EB0"
};

export default AccountGroupIcon;
