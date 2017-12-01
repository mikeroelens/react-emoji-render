import React from "react";
import PropTypes from "prop-types";
import Emoji from "./renderer";
export { toArray } from "./renderer";

let protocol = "https";

export default Emoji;

export function Twemoji({ svg, options, ...rest }) {
  const size = "";
  const ext = "svg";

  options = {
    protocol,
    baseUrl: `//twemoji.maxcdn.com/2/svg/`,
    size,
    ext,
    ...options
  };

  return <Emoji options={options} {...rest} />;
}

Twemoji.propTypes = {
  text: PropTypes.string,
  options: PropTypes.object,
  svg: PropTypes.bool
};

export function Emojione({ svg, options, ...rest }) {
  options = {
    protocol,
    baseUrl: `//cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/svg/`,
    size: "",
    ext: "svg",
    ...options
  };

  return <Emoji options={options} {...rest} />;
}

Emojione.propTypes = {
  text: PropTypes.string,
  options: PropTypes.object,
  svg: PropTypes.bool
};
