import React from 'react';
import { useSelector } from 'react-redux';
import { getStates } from '../../selectors';
import RateIcon from './RateIcon';

const Opportunuties = () => {
  const { rating, starred, user } = useSelector(getStates);

  const toggleExpand = (e: React.MouseEvent<HTMLLIElement>) => {
    if (starred && e.target === e.currentTarget) {
      const target = e.target as HTMLLIElement;
      target.children[1].classList.toggle('show');
    }
  };

  return (
    <div className="opportunities">
      <h4>Opportunities</h4>
      {!starred && (
        <div className="block-message">
          <h3>
            {user && user.login} should star{' '}
            <a
              href="https://github.com/aykutsarac/github-rater"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Rater's repository at GitHub
            </a>{' '}
            to view opportunities that can improve GitHub rating efficiently!
          </h3>
        </div>
      )}
      <div className={`opportunity ${!starred ? ' blocked' : ''}`}>
        <span className="header">Opportunity</span>
        <ul>
          {rating &&
            rating
              .filter((r) => r.Score < 90)
              .map((r, idx) => (
                <li key={idx} className="expand" onClick={toggleExpand}>
                  <RateIcon rate={r.Score} /> {r.Name}
                  {starred && <div className="data">{r.Message}</div>}
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default Opportunuties;
