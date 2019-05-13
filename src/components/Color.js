import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex, rgb }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name ? name : hex}</dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>Red - {rgb.red}</dd>
      <dd>Green - {rgb.green}</dd>
      <dd>Blue - {rgb.blue}</dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.number.isRequired
};

export default Color;
