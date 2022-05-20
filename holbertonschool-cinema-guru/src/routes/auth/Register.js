import './auth.css';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';

export default function Register({username, password, setUsername, setPassword}) {
  return (
    <div>
      <h1>Create a new account</h1>
      <Input type="text" placeholder="Username" value={username} onChange={setUsername} />
      <Input type="password" placeholder="Password" value={password} onChange={setPassword} />
      <Button label="Sign Up" className="squareButton" />
    </div>
  )
}
