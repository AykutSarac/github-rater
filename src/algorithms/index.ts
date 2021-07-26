import { IResult, Rating, Repository, User } from "../types"
import finalizeResult from "./finalizeResult"

export class UserRating {
    user: User
    repos: Repository[]
    result: IResult[] = []
    rating: Rating = {
        bioExists: false,
        locationExists: false,
        blogExists: false
    }

    constructor(user: User, repos: Repository[]) {
        this.user = user;
        this.repos = repos;
    }

    rateBio() {

        // Biography Rating
        if (this.user.bio) {
            const WORD_COUNT = this.user.bio.split(' ').length;

            this.rating.bioExists = true;
            this.rating.bioLength = WORD_COUNT;
        }
    }

    rateCountry() {

        // Country exists check
        if (this.user.location) {
            this.rating.locationExists = true;
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
        const rate = this.user.followers / this.user.following;
        if (rate < 0.2) this.rating.userPopularity = 0
        else this.rating.userPopularity = 100;
    }

    rateStars() {

        // Total Stars
        const TOTAL_STARS = this.repos.map(r => r.stargazers_count).reduce((a, b) =>  a + b)
        const TOTAL_FORKS = this.repos.map(r => r.forks_count).reduce((a, b) => a + b)

        const rate = (TOTAL_STARS + TOTAL_FORKS * 1.2) / this.repos.length
        this.rating.repoPopularity = rate;
    }

    rateRepoDescription() {

        // Repository Description Rating
        const repoDescLength = this.repos.map(r => {
            const length = r.description.split(' ').length;

            return (length < 4) ? 0 : 1;
        });

        const rate = (this.repos.length / repoDescLength.length)
        this.rating.repoDescriptionRating = rate;
    }

    rateWebpage() {

        // Webpage rating
        const webpageExist = this.repos.map(r => r.homepage).filter(r => r)
        const rate = (webpageExist.length / this.repos.length) * 100

        this.rating.webpageRating = rate * 1.5;
    }

    getResult() {
        this.rateBio()
        this.rateBlog()
        this.rateCountry()
        this.ratePopularity()
        this.rateRepoDescription()
        this.rateStars()
        this.rateWebpage()

        finalizeResult(this.rating)        
    }

}