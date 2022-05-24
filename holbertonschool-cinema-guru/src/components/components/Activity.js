import './components.css';

export default function Activity({ username, title, date }) {
  return (
    <div className="activity">
      <span>{username} </span>
      <span>added </span>
      <span>{title} </span>
      <span>to watch later - {date}</span>
    </div>
  )
}
