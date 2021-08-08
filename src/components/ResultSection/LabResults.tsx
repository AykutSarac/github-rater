import React from 'react';
import ResultsList from './ResultsList';

const LabResults = () => (
  <div className="labdata">
    <div className="metric-container">
      <h4>Lab Results</h4>
      <div className="metric-grid"></div>
      <ResultsList />
    </div>
    <div className="muted results-info">
      Values are estimated and may vary. The{' '}
      <a href="https://github.com/AykutSarac/github-rater#how-it-calculates">
        rating score is calculated
      </a>{' '}
      directly from these metrics.
    </div>
  </div>
);

export default LabResults;
