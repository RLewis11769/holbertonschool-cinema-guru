import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

export default function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes
}) {
  const [input, setInput] = useState(value);

  const handleChange = (e) => {
    setInput(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className={`input-wrapper ${className}`}>
      <label>
        {icon &&
          <FontAwesomeIcon
            icon={icon}
          />
        }
        {label}:
        <input
          type={type}
          value={input}
          onChange={handleChange}
          {...inputAttributes}
        />
      </label>
    </div>
  );
}
