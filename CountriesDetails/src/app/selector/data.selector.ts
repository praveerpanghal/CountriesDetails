import { createSelector } from '@ngrx/store';

import { AppState} from "../reducers";


const selectUsers = (state: AppState) => state.data;

export const selectUserList = createSelector(
  selectUsers,
  (state: any) => state.data
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: any) => state.data
);
