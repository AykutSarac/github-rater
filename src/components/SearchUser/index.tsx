import React from 'react'
import { useSelector } from 'react-redux'
import { getStates } from '../../selectors'
import Input from './Input'

const SearchUser = () => {

    const { user } = useSelector(getStates)

    return (
        <div className="search-user">
            { !user?.login && <h2>View your GitHub profile rating and improve your profile upon results</h2> }
            <Input />
        </div>
    )
}

export default SearchUser
