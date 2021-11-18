import React from 'react';
import { useSelector } from 'react-redux';
import { getStates } from '../../selectors';
import RateIcon from './RateIcon';

const Opportunuties: React.FC = () => {
  const { rating, starred, user } = useSelector(getStates);

  const toggleExpand = (e: React.MouseEvent<HTMLDivElement>) => {
    if (starred && e.target === e.currentTarget) {
      const target = e.target as HTMLLIElement;
      target.children[1].classList.toggle('show');
    }
  };

  const opportunityList = () => {
    if (rating) {
      return rating
        .filter((r) => r.Score < 90 && !r.Partial)
        .map((r, index) => (
          <div role="button" tabIndex={index} key={index} className="expand" onClick={toggleExpand}>
            <RateIcon rate={r.Score} /> {r.Name}
            {starred && (
              <div
                className="data"
                dangerouslySetInnerHTML={{
                  __html: r.Message + (r.Suggestions ? `\n\nMissing Resources:\n• ${r.Suggestions.join('\n• ')}` : ''),
                }}
              />
            )}
          </div>
        ));
    }
    return [];
  };

  if (opportunityList().length > 0) {
    return (
      <div className="audits">
        <h4>Opportunities</h4>
        {!starred && (
          <div className="block-message">
            <h3>
              {user && user.login} should star{' '}
              <a href="https://github.com/aykutsarac/github-rater" target="_blank" rel="noreferrer">
                GitHub Rater&rsquo;s repository at GitHub
              </a>{' '}
              to view opportunities that can improve GitHub rating efficiently!
            </h3>
          </div>
        )}
        <div className={`audit_result ${!starred ? ' blocked' : ''}`}>
          <span className="header">Opportunity</span>
          <ul>{opportunityList()}</ul>
        </div>
      </div>
    );
  }
  return null;
};

export default Opportunuties;
