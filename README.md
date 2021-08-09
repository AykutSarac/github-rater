<p align="center">
  <img src="./assets/logo.png">
</p>
<hr />

# GitHub Rater

[GitHub Rater](https://aykutsarac.github.io/github-rater) rates GitHub profiles upon data received from GitHub API. You can use this tool to find out which part of the profile should be improved to make it more effective. As well as to assess the popularity and activity of other people's profile.

![Screenshot](./assets/preview.png)

## Features

- **Search GitHub Users** - Search for GitHub users, gather scoring about their profiles and repositories
- **Overall Score** - Get an overall score based on other scores
- **Section specific scores** - Such as User Popularity, Biography, Repository Description rating and more
- **Suggestions to Improve** - View your opporunities to improve your GitHub profile upon results
- **Diagnostics** - View diagnostics acquired and evaluated through user's profile that doesn't effect the scoring but general profile overview

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
