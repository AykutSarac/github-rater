import React from 'react'
import { IFResultObject } from '../../../types';
import LabResults from './LabResults';
import ProgressBar from '../../Layout/ProgressBar';

interface IResults {
    results: IFResultObject[]
}

const Results = ({ results }: IResults) => {

    const OVERALL_SCORE = parseInt((results.map(e => e.Score).reduce((a: number, b: number) => a + b) / 5).toFixed(0))
    
    return (
            <div className="show-results">
                <ProgressBar percentage={OVERALL_SCORE} title="Overall Score" />
                <LabResults results={results} />
            </div>
    )
}

export default Results
