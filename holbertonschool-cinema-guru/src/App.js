import { useState } from 'react';
import './App.css';
import Button from './components/general/Button.js';
import Input from './components/general/Input.js';
import SearchBar from './components/general/SearchBar.js';
import SelectInput from './components/general/SelectInput.js';

function App() {
  [isLoggedIn, setIsLoggedIn] = useState(false);
  [userUsername, setUserUsername] = useState('');

  function setValue(e) {
    console.log(e.target.value);
  }

  function setTitle(e) {
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <Input label="Username" type="text" className="whiteInput" setValue={setValue} placeholder="name" />
      <Input label="Min Date" type="number" className="blackInput" setValue={setValue} icon={"user"} />

      <SelectInput label="Select" className="whiteSelect" setValue={setValue} options={[{ value: "1", label: "One" }, { value: "2", label: "Two" }, { value: "3", label: "Three" }]} />
      <SelectInput label="Select" className="blackSelect" setValue={setValue} options={[{ value: "1", label: "One" }, { value: "2", label: "Two" }, { value: "3", label: "Three" }]} />

      <Button label="Load More..." className="squareButton" />
      <Button label="Drama" className="roundButton" />

      <SearchBar title="Search" className="whiteSearch" setTitle={setTitle} />
      <SearchBar title="Search" className="blackSearch" setTitle={setTitle} />
    </div>
  );
}

export default App;
