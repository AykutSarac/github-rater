import React from 'react'
import { ResultObject } from '../../../types';
import LabResults from './LabResults';
import ProgressBar from './ProgressBar';


const Results = ({ results }: { results: ResultObject[] }) => {

    const convertToInt = (number: number) => parseInt(number.toFixed(0))

    const CALC_SCORE = convertToInt((results.map(e => e.Score).reduce((a: number, b: number) => a + b) / 6) * 1.08);
    const OVERALL_SCORE = CALC_SCORE > 100 ? 100 : CALC_SCORE;

    return (
            <div className="show-results">
                <ProgressBar percentage={OVERALL_SCORE} title="Overall Score" />
                <LabResults results={results} />
            </div>
    )
}

export default Results
