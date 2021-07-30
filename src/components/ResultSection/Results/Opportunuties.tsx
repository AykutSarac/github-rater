import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { IoTriangle, IoSquareSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { getUser } from '../../../selectors'
import { IFResultObject, User } from '../../../types'


interface ISelector {
    rating?: IFResultObject[],
    user?: User,
    starred: Boolean
}

const Opportunuties = () => {

    const { rating, starred, user }: ISelector = useSelector(getUser)

    const generateIcon = (percent: number) => {
        return (
            percent >= 90 ? <FaCircle size={13} className="success" />
                : percent >= 50 ? <IoSquareSharp size={14} className="warning" />
                    : <IoTriangle size={15} className="danger" />
        )
    }

    const toggleExpand = (e: any) => {
        if (!starred) return;
        const elem = e.target.closest('.expand').children[1];
        if (elem) elem.classList.toggle('show');
    }

    return (
        <div className="opportunities">
            <h4>Opportunities</h4>
            {!starred && <div className="block-message">
                <h3>{user && user.login} should star <a href="https://github.com/aykutsarac/github-rater" target="_blank" rel="noreferrer">GitHub Rater's repository at GitHub</a> to view opportunities that can improve GitHub rating efficiently!</h3>
            </div>}
            <div className={`opportunity${!starred && ' blocked'}`}>
                <span className="header">Opportunity</span>
                <ul>
                    {
                        rating && rating.filter(r => r.Score < 90).map((r, idx) => (
                            <li key={idx}>
                                <div className="expand" onClick={toggleExpand}>
                                    {generateIcon(r.Score)} {r.Name}
                                    {starred && (
                                        <div className="data">
                                            {r.Message}
                                        </div>)
                                    }
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default Opportunuties
