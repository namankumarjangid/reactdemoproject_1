import React, { useState } from 'react';
const App = () => {
  // let count = 1;
  const state = useState();
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
    // console.log("clicked" + count++);
  };
  return (
    <div className="naman dib pa4 tc">
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" />
      <h1>{count}</h1>
      <button onClick={IncNum}> Click me</button>
    </div>
  );
};

export default App;




// current time by hooks in react
import React, { useState } from 'react';
const App = () => {
  const state = useState();
  let newTime = new Date().toLocaleTimeString();
  const [cTime,updateTime]= useState(newTime);
  const afterTime = () =>{
    let newTime = new Date().toLocaleTimeString();
    updateTime(newTime);
  }

  return (
    <div className="dib pa4 tc">
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" />
      <h1>{cTime}</h1>
      <button onClick={afterTime}> Get Time</button>
    </div>
  );
};

export default App;