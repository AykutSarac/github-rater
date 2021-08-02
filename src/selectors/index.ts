import { RootState } from '../types'

export const getStates = (state: RootState) => state.userState
export const getResult = (state: RootState) => state.userState.rating
export const getLoading = (state: RootState) => state.userState.loading
export const getError = (state: RootState) => state.userState.error