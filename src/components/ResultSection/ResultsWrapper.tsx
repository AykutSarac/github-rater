import React from 'react';
import { useSelector } from 'react-redux';
import { getResult } from '../../selectors';

import ProgressBar from './ProgressBar';
import LabResults from './LabResults';
import Opportunuties from './Opportunities';
import Diagnostics from './Diagnostics';

const ResultsWrapper = () => {
  const result = useSelector(getResult);
  const convertToInt = (number: number) => parseInt(number.toFixed(0));

  const getOverall = (): number => {
    if (result) {
      // Sum of all scores
      const SCORE_SUM = result.filter(r => !r.Partial).map((e) => e.Score).reduce((a: number, b: number) => a + b);

      // Increase overall score by 1.08 to improve accuracy
      const CALC_SCORE = convertToInt((SCORE_SUM / 6) * 1.08);

      return CALC_SCORE && CALC_SCORE > 100 ? 100 : CALC_SCORE;
    } else {
      return 0;
    }
  };

  return (
    <div className="lab-results">
      <ProgressBar percentage={getOverall()} title="Overall Score" />
      <div className="wrapper">
        <LabResults />
        <Opportunuties />
        <Diagnostics />
      </div>
    </div>
  );
};

export default ResultsWrapper;
