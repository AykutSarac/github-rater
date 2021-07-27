import { RootState } from '../types'

export const getUser = (state: RootState) => state.userState
export const getResult = (state: RootState) => state.userState.rating
export const getLoading = (state: RootState) => state.userState.loading