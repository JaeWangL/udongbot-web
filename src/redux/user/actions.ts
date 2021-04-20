import {
  ChangePreferredSignInPayload,
  SetPreferredSignInPayload,
  SignInSocialFailurePayload,
  SignInSocialRequestPayload,
  SignInSocialSuccessPayload,
} from './types';

export enum ActionTypes {
  SIGN_IN_SOCIAL_REQUEST = 'user/SIGN_IN_SOCIAL_REQUEST',
  SIGN_IN_SOCIAL_SUCCESS = 'user/SIGN_IN_SOCIAL_SUCCESS',
  SIGN_IN_SOCIAL_FAILURE = 'user/SIGN_IN_SOCIAL_FAILURE',
  CHANGE_PREFERRED_SIGNIN = 'user/CHANGE_PREFERRED_SIGNIN',
  SET_PREFERRED_SIGNIN = 'user/SET_PREFERRED_SIGNIN',
}

export interface SignInSocialRequestAction {
  type: typeof ActionTypes.SIGN_IN_SOCIAL_REQUEST;
  payload: SignInSocialRequestPayload;
}

export interface SignInSocialSuccessAction {
  type: typeof ActionTypes.SIGN_IN_SOCIAL_SUCCESS;
  payload: SignInSocialSuccessPayload;
}

export interface SignInSocialFailureAction {
  type: typeof ActionTypes.SIGN_IN_SOCIAL_FAILURE;
  payload: SignInSocialFailurePayload;
}

export interface ChangePreferredSignInAction {
  type: typeof ActionTypes.CHANGE_PREFERRED_SIGNIN;
  payload: ChangePreferredSignInPayload;
}

export interface SetPreferredSignInAction {
  type: typeof ActionTypes.SET_PREFERRED_SIGNIN;
  payload: SetPreferredSignInPayload;
}

export type UserAction =
  | SignInSocialRequestAction
  | SignInSocialSuccessAction
  | SignInSocialFailureAction
  | ChangePreferredSignInAction
  | SetPreferredSignInAction;

export const signInSocialRequest = (payload: SignInSocialRequestPayload): UserAction => ({
  type: ActionTypes.SIGN_IN_SOCIAL_REQUEST,
  payload,
});

export const signInSocialSuccess = (payload: SignInSocialSuccessPayload): UserAction => ({
  type: ActionTypes.SIGN_IN_SOCIAL_SUCCESS,
  payload,
});

export const signInSocialFailure = (payload: SignInSocialFailurePayload): UserAction => ({
  type: ActionTypes.SIGN_IN_SOCIAL_FAILURE,
  payload,
});

export const changePreferredSignIn = (payload: ChangePreferredSignInPayload): UserAction => ({
  type: ActionTypes.CHANGE_PREFERRED_SIGNIN,
  payload,
});

export const setPreferredSignIn = (payload: SetPreferredSignInPayload): UserAction => ({
  type: ActionTypes.SET_PREFERRED_SIGNIN,
  payload,
});
