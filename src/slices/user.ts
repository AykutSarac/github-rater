import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react';
import { UserRating } from '../algorithms';
import { GetUserData } from '../api';
import { UserState } from '../types';


export const initialState: UserState = {
    user: {},
    repos: [],
    rating: {},
    loading: false,
  }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData: (state, { payload }: PayloadAction<any>) => {
            state.user = payload.user;
            state.repos = payload.repos;
        },
        setRating: (state, { payload }: PayloadAction<any>) => {
            state.rating = payload
        },
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload
        }
    }
});

const { setData, setRating, setLoading } = userSlice.actions
export default userSlice.reducer


export const getUser = (userName: string) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(setLoading(true))
        const user = await GetUserData(userName);
        

        if (user) {
            const result = new UserRating(user.user, user.repos).getResult()
            dispatch(setRating(result))
            dispatch(setLoading(false))
        }
        dispatch(setData(user));
    } catch (err) {
        console.error(err, err?.stack);
    }
}