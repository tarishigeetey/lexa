import React from 'react';

const Button = ({ children, onClick, disabled, className }) => (
  <button
    className={`px-4 py-2 text-base text-white bg-blue-500 rounded cursor-pointer transition-colors ${className}`}
    onClick={onClick}
    disabled={disabled}
    style={{ opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
  >
    {children}
  </button>
);

export default Button;
