import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResultObject, UserState } from '../types';

export const initialState: UserState = {
  user: null,
  repos: null,
  rating: null,
  error: null,
  starred: false,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, { payload }: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess: (state, { payload }: PayloadAction<any>) => {
      state.user = payload.user;
      state.repos = payload.repos;
      state.starred = payload.isStarred;
      state.loading = false;
    },
    setRating: (state, { payload }: PayloadAction<ResultObject[]>) => {
      state.rating = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.user = null;
      state.repos = null;
      state.rating = null;
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { getUser, getUserSuccess, setRating, setError } = userSlice.actions;
export default userSlice.reducer;
