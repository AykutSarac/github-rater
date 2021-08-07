import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { getResult } from '../../selectors';

import RateIcon from './RateIcon';

const ResultsList = () => {
  const results = useSelector(getResult);
  const generateResult = (percentage: number) =>
    percentage >= 90 ? 'success' : percentage >= 50 ? 'warning' : 'danger';

  return (
    <Fragment>
      {results &&
        results
          .filter((r) => !r.Partial)
          .map((result, idx) => (
            <div className="metric-wrapper" key={idx}>
              <span className="metric-title">
                <RateIcon rate={result.Score} /> {result.Name}
              </span>
              <span className={`metric-result ${generateResult(result.Score)}`}>
                {result.Score}
              </span>
            </div>
          ))}
    </Fragment>
  );
};

export default ResultsList;
