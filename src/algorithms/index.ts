import { IResult, Rating, Repository, User } from "../types"
import finalizeResult from "./finalizeResult"

export class UserRating {
    user: User
    repos: Repository[]
    result: IResult[] = []
    rating: Rating = {
        bioExists: false,
        bioRating: 0,
        locExists: false,
        blogExists: false,
        userPopularity: 0,
        repoPopularity: 0,
        repoDescriptionRating: 0,
        webpageRating: 0,
        totalForks: 0,
        totalStars: 0,
        repoCount: 0
    }

    constructor(user: User, repos: Repository[]) {
        const TOTAL_STARS = repos.map(r => r.stargazers_count).reduce((a, b) => a + b)
        const TOTAL_FORKS = repos.map(r => r.forks_count).reduce((a, b) => a + b)

        this.user = user;
        this.repos = repos;

        this.rating.totalStars = TOTAL_STARS;
        this.rating.totalForks = TOTAL_FORKS;
        this.rating.bioExists = Boolean(user.bio);
        this.rating.locExists = Boolean(user.location);
        this.rating.repoCount = repos.length;
    }

    rateBio() {

        // Biography Rating
        if (this.user.bio) {
            const WORD_COUNT = this.user.bio.split(' ').length;

            this.rating.bioExists = true;
            const res = (WORD_COUNT * 8)
            this.rating.bioRating = res > 100 ? 100 : res;
        }
    }

    rateCountry() {

        // Country exists check
        if (this.user.location) {
            this.rating.locExists = true;
        }
    }

    rateBlog() {

        // Blog/Webpage exists
        if (this.user.blog) {
            this.rating.blogExists = true;
        }
    }

    ratePopularity() {

        // Popularity Rating
        const STAR_RATE = this.repos.map(r => r.stargazers_count).reduce((a, b) => a + b) / this.repos.length

        const rate = (this.user.followers / this.repos.length) + STAR_RATE;
        const res = parseInt((rate * 15).toFixed(0));
        this.rating.userPopularity = res >= 100 ? 100 : res
    }

    rateStars() {

        // Total Stars
        const TOTAL_STARS = this.repos.map(r => r.stargazers_count).reduce((a, b) => a + b)
        const TOTAL_FORKS = this.repos.map(r => r.forks_count).reduce((a, b) => a + b)

        const rate = (TOTAL_STARS + TOTAL_FORKS * 1.2) / this.repos.length
        const res = parseInt((rate * 15).toFixed(0));
        this.rating.repoPopularity = res >= 100 ? 100 : res;
    }

    rateRepoDescription() {

        // Repository Description Rating
        const repoDescLength = this.repos.map(r => {
            const length = r.description?.split(' ').length || 0;

            return (length < 4) ? 0 : 1;
        });
        const rate = (this.repos.length / repoDescLength.length)
        const res = rate * 100;
        this.rating.repoDescriptionRating = res >= 100 ? 100 : res;
    }

    rateWebpage() {

        // Webpage rating
        const webpageExist = this.repos.map(r => r.homepage).filter(r => r)
        const rate = (webpageExist.length / this.repos.length) * 100

        const res = rate * 1.8;
        this.rating.webpageRating = res >= 100 ? 100 : res;
    }

    getResult() {
        this.rateBio()
        this.rateBlog()
        this.rateCountry()
        this.ratePopularity()
        this.rateRepoDescription()
        this.rateStars()
        this.rateWebpage()

        return finalizeResult(this.rating)
    }

}