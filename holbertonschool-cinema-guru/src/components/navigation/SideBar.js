import './navigation.css';
import Activity from '../components/Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock, faFolder, faStar } from '@fortawesome/free-solid-svg-icons';
const activities = require('../components/activities.json');

export default function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-item">
          <a href="#">
            <FontAwesomeIcon icon={faFolder} className="mainIcon" />
            <h2>Home</h2>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <FontAwesomeIcon icon={faStar} className="mainIcon" />
            <h2>Favorites</h2>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <FontAwesomeIcon icon={faClock} className="mainIcon" />
            <h2>Watch Later</h2>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </li>
      </ul>
      <div className="activities">
        <h1>Latest Activities</h1>
        {activities.map(activity => (
          <Activity
            key={activity.id}
            username={activity.username}
            title={activity.title}
            date={activity.date}
          />
        ))}
      </div>

    </div>
  )
}
