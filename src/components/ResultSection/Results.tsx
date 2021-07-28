import React from 'react'
import { IFResultObject } from '../../types';
import Alert from './Alert';
import ProgressBar from './ProgressBar';

const Results = ({ results }: any) => {

    const OVERALL_SCORE = parseInt((results.map((e: IFResultObject) => e.Score).reduce((a: number, b: number) => a + b) / 5).toFixed(0))
    
    return (
        <div>
            <Alert />
            <div className="show-results">
                <ProgressBar percentage={OVERALL_SCORE} title="Overall Score" />
            </div>
        </div>
    )
}

export default Results
