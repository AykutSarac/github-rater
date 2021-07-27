import { Rating } from "../types";

const finalizeResult = (rating: Rating) => {    

    const result: Object[] = [
        {
            Name: 'Biography',
            Message: 'It is suggested to have a proper biography with at least 5 words.',
            Score: rating.bioRating
        },
        {
            Name: 'Repository Description',
            Message: 'You should provide brief description about your repository.',
            Score: rating.repoDescriptionRating
        },
        {
            Name: 'Repository Popularity',
            Message: '',
            Score: rating.repoPopularity
        },
        {
            Name: 'Providing Web Pages',
            Message: "It's important to provide a webpage if your repository is especially a library. You can use gitbook or simliar tools to documante your project or provide a demo of how it works.",
            Score: rating.webpageRating
        },
        {
            Name: 'User Popularity',
            Message: 'Having too many repositories with a few followers is probably a bad impact, you should review your repositories and improve if that is the case.',
            Score: rating.userPopularity
        }
    ];


    return result;
}

export default finalizeResult;