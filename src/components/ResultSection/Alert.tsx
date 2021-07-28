import React from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../selectors'

const Alert = () => {

    const { user } = useSelector(getUser)

    return (
        <div className="alert">
            Results for user: <a href={user.html_url} target="_blank" rel="noreferrer" className="highlight">{ user.login }</a>
        </div>
    )
}

export default Alert
