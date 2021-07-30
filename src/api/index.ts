import axios from 'axios'
import { Repository, User } from '../types'

interface IData {
    user: User,
    repos: Repository[],
    isStarred: Boolean
}

// Fetch data from https://api.github.com and return user data and repos as object
export const GetUserData = async (userName: string): Promise<IData | undefined> => {
    try {
        const user = await axios.get(`https://api.github.com/users/${userName}`).then(res => res?.data)
        const repos = await axios.get(`https://api.github.com/users/${userName}/repos`).then(res => res?.data)
        const stars: Repository[] = await axios.get(`https://api.github.com/users/${userName}/starred`).then(res => res?.data)

        const isStarred = stars.map(r => r.id).includes(389782256);

        return {
            user,
            repos,
            isStarred
        }
        
    } catch (err) {
        throw err
    }
}