import React, { useState } from 'react';
const App = () => {
  const [name, setName] = useState("");
  const [fullName, setfullName] = useState("");
  const inputEvent = (event) => {
    //console.log(event.target.value);
    setName(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setfullName(name);

  }
  return (
    <form onSubmit={onSubmit}> 
    <div>
      <h1>Hello {fullName} </h1>
      <input type="text" placeholder="Enter your Name" onChange={inputEvent} value={name} />
      <input type="password" placeholder="Enter your pasword" />
      <br/>
      <button type="submit"> Submit</button>
    </div>
    </form>
  );
};

export default App;