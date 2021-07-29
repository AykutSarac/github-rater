import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { IoTriangle, IoSquareSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { getResult } from '../../../selectors'
import { IFResultObject } from '../../../types'

const Opportunuties = () => {

    const result: IFResultObject[] = useSelector(getResult)

    const generateIcon = (percent: number) => {
        return (
            percent >= 90 ? <FaCircle size={13} className="success" />
                : percent >= 50 ? <IoSquareSharp size={14} className="warning" />
                    : <IoTriangle size={15} className="danger" />
        )
    }

    const toggleExpand = (e: any) => {
        const elem = e.target.closest('.expand').children[1];
        if (elem) elem.classList.toggle('show');
    }

    return (
        <div className="opportunities">
            <h4>Opportunities</h4>
            <div className="opportunity">
                <span className="header">Opportunity</span>
                <ul>
                    {
                        result.filter(r => r.Score < 90).map((r, idx) => (
                            <li key={idx}>
                                <div className="expand" onClick={toggleExpand}>
                                    { generateIcon(r.Score) } {r.Name}
                                    <div className="data">
                                        {r.Message}
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default Opportunuties
