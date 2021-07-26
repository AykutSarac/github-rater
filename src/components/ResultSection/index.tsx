import React, { useState } from 'react'
import Default from './Default'
import Results from './Results'

const ResultSection = () => {

    //const dispatch = useDispatch()
    //const { user, repos, loading } = useSelector(getUser)
    const [results, setResults] = useState(null)

    return (
        <section id="results">
            {
                results ? <Results /> : <Default />
            }
        </section>
    )
}

export default ResultSection
