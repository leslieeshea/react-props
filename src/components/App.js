import './index.css';
import React from 'react';
import Header from './Header';
import Dog from './Dog';

export default function App() {
  return (
    <>
      <img src="https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_12x5_992.jpg"></img>
      <Header />
      <Dog name="Buddy" age={1} weight="10 lbs"/>
    </>
  );
}
