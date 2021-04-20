import produce from 'immer';
import { DecodedUser } from '@/dtos';
import { ActionTypes, UserAction } from './actions';

export interface UserState {
  user?: DecodedUser;
  isLoading: boolean;
  errorMsg?: string;
  preferredSigninMethod?: string;
}

export const initialState: UserState = {
  isLoading: false,
};

export const userReducers = (state: UserState = initialState, action: UserAction): UserState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.SIGN_IN_SOCIAL_REQUEST:
        draft.isLoading = true;
        break;
      case ActionTypes.SIGN_IN_SOCIAL_SUCCESS:
        draft.user = action.payload.user;
        draft.isLoading = false;
        break;
      case ActionTypes.SIGN_IN_SOCIAL_FAILURE:
        draft.errorMsg = action.payload.errorMsg;
        draft.isLoading = false;
        break;
      case ActionTypes.SET_PREFERRED_SIGNIN:
        draft.preferredSigninMethod = action.payload.preferredSigninMethod;
        break;
      default:
        break;
    }
  });
