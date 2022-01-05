import React from 'react';

import RateIcon from './RateIcon';

export interface ProgressOptions {
  percentage: number;
  title: string;
}

const ProgressBar: React.FC<ProgressOptions> = ({ percentage = 0, title }) => {
  const [color, setColor] = React.useState('#0cce6b');

  React.useEffect(() => {
    if (percentage >= 90) return setColor('#0cce6b');
    if (percentage >= 50) return setColor('#ffa400');
    return setColor('#ff4e42');
  }, [percentage]);

  return (
    <div className="progressbar">
      <div className="percent">
        <svg>
          <circle cx="60" cy="60" r="60" />
          <circle
            cx="60"
            cy="60"
            r="60"
            style={{
              strokeDashoffset: `${377 - (377 * percentage) / 100}`,
              stroke: `${color}`,
              fill: `${color}`,
            }}
          />
        </svg>
        <div className="number">
          <span style={{ color }} data-test="overall-score">
            {percentage}
          </span>
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
