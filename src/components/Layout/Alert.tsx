import React from 'react';

export interface AlertProps {
  children: React.ReactNode;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({ children, className }) => {
  return <div className={`alert ${className}`}>{children}</div>;
};

export default Alert;
