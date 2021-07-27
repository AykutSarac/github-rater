import React from 'react'
import { IFResultObject } from '../../types';
import ProgressBar from './ProgressBar';

const Results = ({ results }: any) => {

    const OVERALL_SCORE = parseInt((results.map((e: IFResultObject) => e.Score).reduce((a: number, b: number) => a + b) / 5).toFixed(0))

    return (
        <div>
            <ProgressBar percentage={OVERALL_SCORE} title="Overall Score" />
        </div>
    )
}

export default Results
