import { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';
import Button from '../../components/general/Button';

export default function Authentication({setIsLoggedIn, setUserUsername}) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSwitch = (val) => {
    setSwitch(val);
    console.log(_switch);
  };

  return (
    <form className="centered">
      <header>
        <Button label="Sign up" onClick={() => setSwitch(true)} className={_switch} />
        <Button label="Sign in" onClick={() => setSwitch(false)} className={!_switch} />
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
