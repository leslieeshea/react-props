import React from 'react';
import Header from './Header';
import Color from './Color';

export default function App() {
  const name = 'Pearl Violet';
  const rgb = {
    red: 134,
    green: 115,
    blue: 161
  };

  return (
    <>
      <Header />
      <Color name={name} rgb={rgb} />
    </>
  );
}
