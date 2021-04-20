import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/rootReducers';
import { signInSocialRequest, UserState, SignInSocialRequestPayload, UserAction } from '@/redux/user';

export interface UserStore {
  user: UserState;
  signInSocial: (payload: SignInSocialRequestPayload) => UserAction;
}

export const useUserStore = (): UserStore => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const signInSocialDispatch = useCallback(
    (payload: SignInSocialRequestPayload) => dispatch(signInSocialRequest(payload)),
    [dispatch],
  );

  return {
    user,
    signInSocial: signInSocialDispatch,
  };
};
