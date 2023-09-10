import React from 'react';
import Greetings from './Greetings';

const App = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return <Greetings name="Eric" onClick={onClick} />;
};

export default App;
