import axios from 'axios'
import { Repository, User } from '../types'

interface IData {
    user: User,
    repos: Repository[]
}

// Fetch data from https://api.github.com and return user data and repos as object
export const GetUserData = async (userName: string): Promise<IData | undefined> => {
    try {
        const user = await axios.get(`https://api.github.com/users/${userName}`).then(res => res?.data)
        const repos = await axios.get(`https://api.github.com/users/${userName}/repos`).then(res => res?.data)

        return {
            user,
            repos
        }
        
    } catch (err) {
        throw err
    }
}