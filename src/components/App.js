import React from 'react';
import Header from './Header';
import Color from './Color';

export default function App() {
  return (
    <>
      <Header />
      <Color name="Pearl Violet" hex="#8673A1" red={134} green={115} blue={161}/>
    </>
  );
}
