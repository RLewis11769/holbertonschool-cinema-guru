import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard';
import Authentication from './components/Authentication';
// import Button from './components/general/Button.js';
// import Input from './components/general/Input.js';
// import SearchBar from './components/general/SearchBar.js';
// import SelectInput from './components/general/SelectInput.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    axios.post('/api/auth', {
      headers: { authorization: `Bearer ${token}` }
    }).then((res) => {
      setIsLoggedIn(true);
      setUserUsername(res.data.username);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Authentication />}
    </div>
  );
}

export default App;
