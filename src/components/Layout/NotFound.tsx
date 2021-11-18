import React from 'react';
import notFound from '../../assets/404.svg';

const NotFound: React.FC = () => {
  return (
    <div className="notfound">
      <img width="300" height="auto" src={notFound} alt="not found" />
    </div>
  );
};

export default NotFound;
