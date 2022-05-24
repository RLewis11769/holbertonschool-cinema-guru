import './navigation.css';

export default function Header({ userUsername, setIsLoggedIn }) {
  function logout() {
    setIsLoggedIn(false);
    localStorage.removeItem('accessToken');
  }

  return (
    <nav>
      <h1>Cinema Guru</h1>
      <div>
        <img src="https://picsum.photos/100/100" alt="Profile pic" />
        <p>Welcome, {userUsername}!</p>
        <span onClick={logout}>Logout</span></div>
    </nav>
  )
}
