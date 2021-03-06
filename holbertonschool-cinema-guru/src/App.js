import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './routes/dashboard/Dashboard';
import Authentication from './routes/auth/Authentication';

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
        setUserUsername(res.data.username);
      }).catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} /> : <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />}
    </div>
  );
}

export default App;
