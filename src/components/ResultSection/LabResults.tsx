import React from 'react';
import { useSelector } from 'react-redux';
import { getResult } from '../../selectors';

import RateIcon from './RateIcon';

const LabResults = () => {
  const results = useSelector(getResult);
  const generateResult = (percentage: number) =>
    percentage >= 90 ? 'success' : percentage >= 50 ? 'warning' : 'danger';

  const displayList = () =>
    results?.map((result, idx) => (
      <div className="metric-wrapper" key={idx}>
        <span className="metric-title">
          <RateIcon rate={result.Score} /> {result.Name}
        </span>
        <span className={`metric-result ${generateResult(result.Score)}`}>
          {result.Score}
        </span>
      </div>
    ));

  return (
    <div className="labdata">
      <div className="metric-container">
        <h4>Lab Results</h4>
        <div className="metric-grid"></div>
        {displayList()}
      </div>
      <div className="muted results-info">
        Values are estimated and may vary. The{' '}
        <a href="https://github.com/AykutSarac/github-rater#how-it-calculates">
          rating score is calculated
        </a>{' '}
        directly <br /> from these metrics.
      </div>
    </div>
  );
};

export default LabResults;
