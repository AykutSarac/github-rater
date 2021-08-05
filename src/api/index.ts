import { Repository, User } from '../types';
import axiosInstance from './axiosInstance';

interface Data {
  user: User;
  repos: Repository[];
  isStarred: Boolean;
}

// Fetch data from https://api.github.com and return user data and repos as object
export const GetUserData = async (userName: string): Promise<Data> => {
  try {
    // Fetch User Data
    const user: User = await axiosInstance.get(userName).then((res) => res?.data);

    // Fetch Repository Data
    const repos: Repository[] = await axiosInstance
      .get(`${userName}/repos?&per_page=250`)
      .then((res) => res?.data.filter((r: Repository) => !r.fork));
    if (repos.length === 0) throw Error("Couldn't find any public repository.");

    // Fetch starred repositories & check if user starred GitHub Rater
    const stars: Repository[] = await axiosInstance
      .get(`${userName}/starred`)
      .then((res) => res?.data);
    const isStarred = stars.map((r) => r.id).includes(389782256);

    return {
      user,
      repos,
      isStarred,
    };
  } catch (err) {
    throw err;
  }
};
