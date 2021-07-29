import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../selectors'
import Alert from '../Layout/Alert'
import NotFound from '../Layout/NotFound'
import Default from './Default'
import Loading from './Loading'
import Results from './Results'

const ResultSection = () => {

    const { user, error, loading, rating } = useSelector(getUser)
    const [results, setResults]: any = useState([])

    useEffect(() => {
        setResults(rating)
    }, [rating])

    return (
        <section id="results">
            {
                user?.login ? (
                    <Alert>
                        Results for user: <a href={user.html_url} target="_blank" rel="noreferrer" className="highlight">{user.login}</a>
                    </Alert>
                ) : error && <Alert>{error}</Alert>
            }
            {loading && <Loading />}
            {
                results.length > 0 ? <Results results={results} /> : error ? <NotFound /> : <Default />
            }
        </section>
    )
}

export default ResultSection
