import './general.css';

export default function SearchBar({title, setTitle}) {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" value={title} onChange={(e) => setTitle(e.target.value)}/>
    </div>
  )
}
