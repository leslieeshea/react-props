import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex, red, green, blue }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name ? name : hex}</dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>Red - {red}</dd>
      <dd>Green - {green}</dd>
      <dd>Blue - {blue}</dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string.isRequired,
  red: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired
};

export default Color;
