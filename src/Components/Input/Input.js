import React from 'react';
import './Input.css';
import './TextArea.css';

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  name, 
  className, 
  multiline = false,  // New prop to determine if it should be a multiline input
  ...rest 
}) => {
  if (multiline) {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`textarea ${className}`} // Include className for styling
        {...rest} // Spread any additional props
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`input ${className}`} // Include className for styling
      {...rest} // Spread any additional props
    />
  );
};

export default Input;
