
export interface User {
    login: string,
    id: number,
    avatar_url: string,
    url: string,
    html_url: string,
    followers_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    name: string,
    company: string | null,
    blog: string,
    location: string,
    email: string,
    hireable: boolean,
    bio: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: Date,
    updated_at: Date
}

export interface Repository {
    id: number,
    name: string,
    full_name: string,
    private: boolean,
    html_url: string,
    description: string,
    fork: boolean,
    created_at: Date,
    updated_at: Date,
    pushed_at: Date,
    homepage: string,
    stargazers_count: number,
    watchers_count: number,
    language: JavaScript,
    forks_count: number,
    archived: boolean,
    open_issues_count: number,
    license: {
        key: string,
    },
    forks: number,
    open_issues: number,
    watchers: number,
    default_branch: string
}

export interface UserState {
    user?: Object<User>,
    repos: Repository[],
    loading?: Boolean,
    rating?: any
}

export interface RootState {
    userState: UserState
}

export interface IResult {
    type: string,
    message: string[],
    rating: number
}

export interface Rating {
    bioExists: boolean,
    blogExists: boolean,
    locExists: boolean,
    bioRating: number,
    userPopularity: number,
    repoPopularity: number,
    repoDescriptionRating: number,
    webpageRating: number,
    totalStars: number,
    totalForks: number,
    repoCount: number
}

export interface IFResultObject {
    Name: string,
    Message: string,
    Score: number
}