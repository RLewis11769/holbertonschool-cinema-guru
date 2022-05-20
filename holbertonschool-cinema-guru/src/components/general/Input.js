import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon = '',
  inputAttributes = {}
}) {
  // handleSelect = (e) => {
  //   setValue(e.target.value);
  // };

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
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...inputAttributes}
      />
    </label>
    </div>
  );
}
