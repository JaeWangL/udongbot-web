import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { userReducers, UserAction, UserState } from './user';

export type RootAction = UserAction;
export type RootState = {
  user: UserState;
};

const rootReducer = combineReducers({
  user: userReducers,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const rootReducers = (state: any, action: any): RootState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return rootReducer(state, action);
  }
};

export default rootReducers;
