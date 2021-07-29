import React from 'react'
import { IoTriangle, IoSquareSharp } from 'react-icons/io5'
import { FaCircle } from 'react-icons/fa'
import { IFResultObject } from '../../../types'

interface IProps {
    results: IFResultObject[]
}

const LabResults = ({ results }: IProps) => {

    const generateResult = (percentage: number) => percentage >= 90 ? 'success' : percentage >= 50 ? 'warning' : 'danger'

    const generateIcon = (percent: number) => {
        return (
            percent >= 90 ? <FaCircle size={13} className="success" />
                : percent >= 50 ? <IoSquareSharp size={15} className="warning" />
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
            <div className="metric-container">
                <h3>Lab Results</h3>
                <div className="metric-grid"></div>
                {displayList()}
            </div>
        </div>
    )
}

export default LabResults
