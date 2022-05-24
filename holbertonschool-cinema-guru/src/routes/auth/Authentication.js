import { useState } from 'react';
import axios from 'axios';
import './auth.css';
import Login from './Login';
import Register from './Register';
import Button from '../../components/general/Button';

export default function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (_switch) {
      // If submitting to login, send username and password to server at login route
      axios.post('http://localhost:8000/api/auth/login', {
        username,
        password,
      }).then((res) => {
        // If successful and accessToken exists, set local storage and set state
        if (res.data.accessToken) {
          localStorage.setItem('accessToken', res.data.accessToken);
          setIsLoggedIn(true);
          setUserUsername(username);
        }
      }).catch((err) => {
        // For debugging purposes only (should prob do something else if deploying)
        console.log(err);
      });
    } else {
      // If submitting to register, send username and password to server at register route
      axios.post('http://localhost:8000/api/auth/register', {
        username,
        password,
      }).then((res) => {
        if (res.data.accessToken) {
          // Make sure accessToken set in local storage
          localStorage.setItem('accessToken', res.data.accessToken);
          // Set state
          setIsLoggedIn(true);
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
        <Button label="Sign up" onClick={() => setSwitch(true)} className={_switch} />
        <Button label="Sign in" onClick={() => setSwitch(false)} className={!_switch} />
      </header>
      <main>
        {/* Depending on _switch (used only in this component) display login or register form */}
        {_switch ? (
          <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
        ) : (
          <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
        )}
      </main>
    </form>
  )
}
