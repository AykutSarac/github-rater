import React from 'react'
import notFound from '../../assets/404.svg'

const NotFound = () => {
    return (
        <div className="notfound">
            <img src={notFound} alt="not found" />
        </div>
    )
}

export default NotFound
