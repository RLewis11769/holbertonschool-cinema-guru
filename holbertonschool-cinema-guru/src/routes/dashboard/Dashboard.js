import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './dashboard.css';
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <SideBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/watchlater" element={<WatchLater />} />
      </Routes>
    </BrowserRouter>
  )
}
