import React from 'react';

const ResultsExplainer: React.FC = () => {
  return (
    <div className="results-explainer">
      <div className="default-wrapper">
        <div>
          <span className="header">What Is GitHub Rater</span>
          GitHub Rater, rates your GitHub profile upon data received from{' '}
          <a href="https://docs.github.com/en/rest" target="_blank" rel="noreferrer">
            GitHub API
          </a>{' '}
          with our own algorithm.
        </div>
        <div>
          <span className="header">How Do We Calculate</span>
          Learn more about{' '}
          <a href="https://github.com/AykutSarac/github-rater#how-it-calculates" target="_blank" rel="noreferrer">
            our algorithm used at GitHub Rater
          </a>
          .
        </div>
        <div>
          <span className="header">Help Us Improving Accuracy</span>
          We&rsquo;re doing our best to write the best algorithm in order to accurately rate your GitHub profile. We
          appreciate your contributions, see our{' '}
          <a href="https://github.com/AykutSarac/github-rater" target="_blank" rel="noreferrer">
            GitHub repository
          </a>{' '}
          here to learn how you can help us.
        </div>
        <div>
          <span className="header">Check GitHub Repository</span>
          Check out{' '}
          <a href="https://github.com/AykutSarac/github-rater" target="_blank" rel="noreferrer">
            GitHub Rater&rsquo;s Repository
          </a>{' '}
          at GitHub!
        </div>
      </div>
    </div>
  );
};

export default ResultsExplainer;
