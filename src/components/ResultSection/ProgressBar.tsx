import React, { useEffect, useState } from 'react';

import RateIcon from './RateIcon';

export interface Props {
  percentage: number;
  title: string;
}

const ProgressBar = ({ percentage = 0, title }: Props) => {
  const [color, setColor] = useState('#0cce6b');

  useEffect(() => {
    if (percentage >= 90) return setColor('#0cce6b');
    if (percentage >= 50) return setColor('#ffa400');
    return setColor('#ff4e42');
  }, [percentage]);

  return (
    <div className="progressbar">
      <div className="percent">
        <svg>
          <circle cx="60" cy="60" r="60"></circle>
          <circle
            cx="60"
            cy="60"
            r="60"
            style={{
              strokeDashoffset: `${377 - (377 * percentage) / 100}`,
              stroke: `${color}`,
              fill: `${color}`,
            }}
          ></circle>
        </svg>
        <div className="number">
          <span style={{ color }}>{percentage}</span>
        </div>
      </div>
      <h2 className="title">{title}</h2>
      <div className="info">
        <div>
          <RateIcon rate={0} /> 0-49
        </div>
        <div>
          <RateIcon rate={50} /> 50-89
        </div>
        <div>
          <RateIcon rate={100} /> 90-100
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;