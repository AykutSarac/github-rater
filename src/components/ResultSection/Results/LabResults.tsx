import React from 'react'
import { IoTriangle, IoSquareSharp } from 'react-icons/io5'
import { FaCircle } from 'react-icons/fa'
import { IFResultObject } from '../../../types'
import Opportunuties from './Opportunuties'

interface IProps {
    results: IFResultObject[]
}

const LabResults = ({ results }: IProps) => {

    const generateResult = (percentage: number) => percentage >= 90 ? 'success' : percentage >= 50 ? 'warning' : 'danger'

    const generateIcon = (percent: number) => {
        return (
            percent >= 90 ? <FaCircle size={13} className="success" />
                : percent >= 50 ? <IoSquareSharp size={14} className="warning" />
                    : <IoTriangle size={15} className="danger" />
        )
    }

    const displayList = () => results.map((result, idx) => (
        <div className="metric-wrapper" key={idx}>
            <span className="metric-title">
                {generateIcon(result.Score)} {result.Name}
            </span>
            <span className={`metric-result ${generateResult(result.Score)}`}>
                {result.Score}
            </span>
        </div>
    ))

    return (
        <div className="lab-results">
            <div className="labdata">
                <div className="metric-container">
                    <h4>Lab Results</h4>
                    <div className="metric-grid"></div>
                    {displayList()}
                </div>
                <div className="muted results-info">
                    Values are estimated and may vary. The <a href="https://github.com/AykutSarac/github-rater">performance score is calculated</a> directly <br /> from these metrics.
                </div>
            </div>
            <Opportunuties />
        </div>
    )
}

export default LabResults
