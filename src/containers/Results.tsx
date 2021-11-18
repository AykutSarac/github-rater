import React from 'react';
import { useSelector } from 'react-redux';
import { getStates } from '../selectors';

import ResultsWrapper from '../components/ResultSection/ResultsWrapper';
import NotFound from '../components/Layout/NotFound';
import Alert from '../components/Layout/Alert';
import Loading from '../components/Layout/Loading';

const Results: React.FC = () => {
  const { user, error, rating, loading } = useSelector(getStates);

  return (
    <section id="results">
      {user ? (
        <Alert>
          Results for user:{' '}
          <a href={user.html_url} target="_blank" rel="noreferrer" className="highlight">
            {user.login}
          </a>{' '}
        </Alert>
      ) : (
        error && <Alert className="bold">{error}</Alert>
      )}
      <div className="results-wrapper">
        {loading && <Loading />}
        {rating && !error ? <ResultsWrapper /> : error && <NotFound />}
      </div>
    </section>
  );
};

export default Results;
