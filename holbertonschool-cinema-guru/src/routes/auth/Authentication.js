import { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';
import Button from '../../components/general/Button';
import axios from 'axios';

export default function Authentication({setIsLoggedIn, setUserUsername}) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSwitch(val) {
    setSwitch(val);
    console.log(val);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (_switch) {
      axios.post('http://localhost:8000/api/auth/login', {
        username,
        password,
        }).then((res) => {
          if (res.data.accessToken) {
            localStorage.setItem('accessToken', res.data.accessToken);
            // Then we will set the isLoggedIn state to true
            setIsLoggedIn(true);
            // And we will set the userUsername state to the username
            setUserUsername(username);
          }
        }).catch((err) => {
          console.log(err);
        });
    } else {
      axios.post('http://localhost:8000/api/auth/register', {
        username,
        password,
        }).then((res) => {
          if (res.data.accessToken) {
            localStorage.setItem('accessToken', res.data.accessToken);
            // Then we will set the isLoggedIn state to true
            setIsLoggedIn(true);
            // And we will set the userUsername state to the username
            setUserUsername(username);
          }
        }).catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <form className="centered" onSubmit={handleSubmit} >
      <header>
        <Button label="Sign up" onClick={() => handleSwitch(true)} className={_switch} />
        <Button label="Sign in" onClick={() => handleSwitch(false)} className={!_switch} />
      </header>
      <main>
        {_switch ? (
          <Login username={username} password={password} />
        ) : (
          <Register username={username} password={password} />
        )}
      </main>
    </form>
  )
}
