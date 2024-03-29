import { Rating, Repository, ResultObject, User } from '../types';
import finalizeResult from './finalizeResult';

export class UserRating {
  // User Data & User Repositories (without forks)
  user: User;

  repos: Repository[];

  // Whether user starred GitHub Rater's repo or not
  isStarred: Boolean;

  rating: Rating = {
    bioExists: false,
    companyExists: false,
    bioRating: 0,
    locExists: false,
    blogExists: false,
    userPopularity: 0,
    repoPopularity: 0,
    repoDescriptionRating: 0,
    webpageRating: 0,
    totalForks: 0,
    totalStars: 0,
    repoCount: 0,
    backlinkRating: 0,
  };

  // Get all user data & repositories
  constructor(user: User, repos: Repository[], isStarred: Boolean) {
    const TOTAL_STARS = repos.map((r) => r.stargazers_count).reduce((a, b) => a + b);
    const TOTAL_FORKS = repos.map((r) => r.forks_count).reduce((a, b) => a + b);

    this.user = user;
    this.repos = repos.filter((r: Repository) => {
      return r.name !== r.owner.login && !r.fork;
    });
    this.isStarred = isStarred;

    this.rating.totalStars = TOTAL_STARS;
    this.rating.totalForks = TOTAL_FORKS;
    this.rating.locExists = Boolean(user.location);
    this.rating.blogExists = Boolean(user.blog);
    this.rating.bioExists = Boolean(user.bio);
    this.rating.companyExists = Boolean(user.company);
    this.rating.repoCount = user.public_repos;
  }

  rateBio() {
    // Biography Rating
    if (this.user.bio) {
      const WORD_COUNT = this.user.bio.split(' ').length;

      const res = WORD_COUNT * 10;
      this.rating.bioRating = res > 100 ? 100 : res;
    }
  }

  ratePopularity() {
    // Popularity Rating
    const STAR_RATE = this.repos.map((r) => r.stargazers_count).reduce((a, b) => a + b) / this.repos.length;

    const rate = this.user.followers / this.repos.length + STAR_RATE;
    const res = parseInt((rate * 15).toFixed(0), 10);
    this.rating.userPopularity = res >= 100 ? 100 : res;
  }

  rateRepoPopularity() {
    // Total Stars
    const TOTAL_STARS = this.repos.map((r) => r.stargazers_count).reduce((a, b) => a + b);
    const TOTAL_FORKS = this.repos.map((r) => r.forks_count).reduce((a, b) => a + b);

    const rate = (TOTAL_STARS + TOTAL_FORKS * 1.2) / this.repos.length;
    const res = parseInt((rate * 16).toFixed(0), 10);
    this.rating.repoPopularity = res >= 100 ? 100 : res;
  }

  rateRepoDescription() {
    // Repository Description Rating
    const repoDescLength = this.repos.filter((r) => r.description?.split(' ').length > 4);

    const rate = this.repos.length / repoDescLength.length;
    const res = parseInt((100 / rate).toFixed(0), 10);
    this.rating.repoDescriptionRating = res >= 100 ? 100 : res;
  }

  rateWebpage() {
    // Webpage rating
    const webpageExist = this.repos.map((r) => r.homepage).filter((r) => r);
    const rate = (webpageExist.length / this.repos.length) * 100;

    const res = parseInt((rate * 1.8).toFixed(0), 10);
    this.rating.webpageRating = res >= 100 ? 100 : res;
  }

  rateBacklinks() {
    // Webpage rating
    const bio = this.rating.bioExists ? 1 : 0;
    const loc = this.rating.locExists ? 1 : 0;
    const blog = this.rating.blogExists ? 1 : 0;
    const company = this.rating.companyExists ? 1 : 0;

    const rate = (bio + loc + blog + company) / 4;
    this.rating.backlinkRating = rate * 100;
  }

  getResult(): ResultObject[] {
    this.rateBio();
    this.ratePopularity();
    this.rateRepoDescription();
    this.rateRepoPopularity();
    this.rateWebpage();
    this.rateBacklinks();

    const repoDescLength = this.repos.filter((r) => r.description?.split(' ').length < 5 || !r.description);

    const notExist = [
      { type: this.rating.bioExists, Name: 'Biography' },
      { type: this.rating.blogExists, Name: 'Blog' },
      { type: this.rating.locExists, Name: 'Location' },
      { type: this.rating.companyExists, Name: 'Company Name' },
    ]
      .filter((el) => !el.type)
      .map((el) => el.Name);

    const licensing = this.repos.filter((r) => !r.license).map((r) => r.full_name);

    const archive = this.repos
      .filter((r) => {
        const TODAY = new Date().getTime();
        const UPDATED_AT = new Date(r.updated_at).getTime();

        const DAY_TO_MS = 1000 * 60 * 60 * 24;
        const DAYS_DIFF = Math.ceil((TODAY - UPDATED_AT) / DAY_TO_MS);

        return DAYS_DIFF > 240;
      })
      .map((r) => r.full_name);

    const suggestions = {
      repository: repoDescLength.map((r) => r.full_name),
      backlinks: notExist,
      licensing,
      archive,
    };

    return finalizeResult(this.rating, suggestions);
  }
}
