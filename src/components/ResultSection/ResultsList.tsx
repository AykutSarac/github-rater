/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
import { getResult } from '../../selectors';

import RateIcon from './RateIcon';

const ResultsList: React.FC = () => {
  const results = useSelector(getResult);

  const generateResult = (percentage: number) => {
    if (percentage >= 90) return 'success';
    if (percentage >= 50) return 'warning';
    return 'danger';
  };

  if (results) {
    return (
      <>
        {results
          .filter((r) => !r.Partial)
          .map((result, index) => (
            <div className="metric-wrapper" key={index}>
              <span className="metric-title">
                <RateIcon rate={result.Score} /> {result.Name}
              </span>
              <span className={`metric-result ${generateResult(result.Score)}`}>{result.Score}</span>
            </div>
          ))}
      </>
    );
  }

  return null;
};

export default ResultsList;
