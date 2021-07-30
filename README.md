<p align="center">
  <img src="./assets/logo.png">
</p>

<div align="center">
<h2>GitHub Rater - Rates Your GitHub Profile</h2>
<a href="https://aykutsarac.github.io/github-rater">https://aykutsarac.github.io/github-rater</a>
</div>
<p></p>

![Screenshot](./assets/preview.png)

## Features

- **Overall Score** - Get an overall score based on other scores.
- **Section specific scores** - Such as User Popularity, Biography, Repository Description rating...
- **Suggestions to Improve** - View your opporunities to improve your GitHub profile upon results.

## How It Calculates

The following conditions are used in the calculations:

- Total Stars
- Total Forks
- Total Followers
- Repository Count
- Repository Descriptions
- User Biography
- User Information (Email, Company, Location, Webpage)

## About

GitHub rater is PageInsights themed GitHub profile rating app. It uses [GitHub API](https://docs.github.com/en/rest) to gather data about user and with our own algorithm it rates the data then displays the result to user.

## Development

Clone and install.

```bash
git clone https://github.com/AykutSarac/github-rater.git
cd github-rater
npm i
```

Run a development server.

```bash
npm start
```

## Author

- [AykutSarac](https://github.com/AykutSarac)

## License

This project is open source and available under the [MIT License](LICENSE).
