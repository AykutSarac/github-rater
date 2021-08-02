import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getStates } from '../../selectors'
import { ResultObject } from '../../types'
import Alert from '../Layout/Alert'
import NotFound from '../Layout/NotFound'
import Default from './Default'
import Loading from './Loading'
import Results from './Results'

const ResultSection = () => {

    const state = useSelector(getStates)
    const [results, setResults] = React.useState<ResultObject[] | null>(null)

    useEffect(() => {
        if (state.rating) setResults(state.rating)
    }, [state.rating])

    return (
        <section id="results">
            {
                state.user ? (
                    <Alert>
                        Results for user: <a href={state.user.html_url} target="_blank" rel="noreferrer" className="highlight">{state.user.login}</a>
                    </Alert>
                ) : state.error && <Alert className="bold">{state.error}</Alert>
            }
            <div className="results-wrapper">
                {state.loading && <Loading />}
                {
                    results && !state.error ? <Results results={results} /> : state.error && <NotFound />
                }
                <Default />
            </div>
        </section>
    )
}

export default ResultSection
