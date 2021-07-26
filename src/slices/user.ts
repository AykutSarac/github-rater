import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react';
import { UserRating } from '../algorithms';
import { GetUserData } from '../api';
import { UserState } from '../types';


export const initialState: UserState = {
    user: {},
    repos: [],
    loading: true,
  }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData: (state, { payload }: PayloadAction<any>) => {
            state.user = payload.user;
            state.repos = payload.repos;
        }
    }
});

const { setData } = userSlice.actions
export default userSlice.reducer


export const getUser = (userName: string) => async (dispatch: Dispatch<any>) => {
    try {
        const user = await GetUserData(userName);

        console.log(user);
        

        if (user) {
            new UserRating(user.user, user.repos).getResult()
        }
        dispatch(setData(user));
    } catch (err) {
        console.error(err, err?.stack);
    }
}