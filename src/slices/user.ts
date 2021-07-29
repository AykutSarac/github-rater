import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react';
import { UserRating } from '../algorithms';
import { GetUserData } from '../api';
import { Repository, User, UserState } from '../types';


export const initialState: UserState = {
    user: {},
    repos: [],
    rating: {},
    loading: false,
    error: null
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
        },
        setError: (state, { payload }: PayloadAction<string>) => {
            state.user = {}
            state.repos = []
            state.rating = []
            state.loading = false
            state.error = payload
        }
    }
});

const { setData, setRating, setLoading, setError } = userSlice.actions
export default userSlice.reducer

interface UserData {
    user: User,
    repos: Repository[]
}

export const getUser = (userName: string) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(setLoading(true))
        const data: UserData | undefined = await GetUserData(userName);

        
        if (data?.user) {
            const result = new UserRating(data.user, data.repos).getResult();
            dispatch(setRating(result));
            dispatch(setLoading(false));
            dispatch(setData(data));
        }
    } catch (err) {
        dispatch(setError(err.response?.data.message || 'User Not Found'))
    }
}