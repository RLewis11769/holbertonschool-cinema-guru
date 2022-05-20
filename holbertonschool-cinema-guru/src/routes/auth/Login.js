import './auth.css';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';

export default function Login({ username, password, setUsername, setPassword }) {
  return (
    <div>
      <h1>Sign in with your account</h1>
      <Input type="text" label="Username" value={username} onChange={setUsername} />
      <Input type="password" label="Password" value={password} onChange={setPassword} />
      <Button label="Sign In" className="squareButton" />
    </div>
  )
}
