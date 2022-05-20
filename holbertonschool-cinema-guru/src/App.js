import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard';
import Authentication from './routes/auth/Authentication';
// import Button from './components/general/Button.js';
// import Input from './components/general/Input.js';
// import SearchBar from './components/general/SearchBar.js';
// import SelectInput from './components/general/SelectInput.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    axios
      .post(`http://localhost:8000/api/auth`, {}, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res);
        setIsLoggedIn(true);
        console.log("HERE");
        setUserUsername(res.data.username);
      }).catch((err) => {
        console.log("ERRR");
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />}
    </div>
  );
}

export default App;
