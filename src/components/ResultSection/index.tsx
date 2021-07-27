import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../selectors'
import Default from './Default'
import Loading from './Loading'
import Results from './Results'

const ResultSection = () => {

    //const dispatch = useDispatch()
    const { loading, rating } = useSelector(getUser)
    const [results, setResults]: any = useState([])


    useEffect(() => {

        if (rating.length > 0) {
            setResults(rating)
        }
    }, [rating])

    return (
        <section id="results">
            {
                loading ? <Loading /> :  ( results.length > 0 ? <Results results={results} /> : <Default />) 
            }
        </section>
    )
}

export default ResultSection
