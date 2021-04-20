import JwtDecode from 'jwt-decode';
import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AuthTokensDto, DecodedUser, SignInSocialRequest } from '@/dtos';
import { signInSocialAsync } from '@/services';
import {
  setPreferredSignIn,
  signInSocialFailure,
  signInSocialSuccess,
  ActionTypes,
  ChangePreferredSignInAction,
  SignInSocialRequestAction,
} from './actions';

export function* signInSocialRequest({ payload }: SignInSocialRequestAction): SagaIterator<void> {
  const { email, name, profileUrl, socialId, socialType } = payload;

  try {
    const req: SignInSocialRequest = {
      email,
      name,
      profileUrl,
      socialType,
      socialId,
    };
    const res: AuthTokensDto = yield call(signInSocialAsync, req);
    const decodedUser = JwtDecode<DecodedUser>(res.accessToken);

    yield put(signInSocialSuccess({ user: decodedUser }));
  } catch (errors) {
    yield put(signInSocialFailure({ errorMsg: errors.toString() }));
  }
}

export function* changePreferredSignIn({ payload }: ChangePreferredSignInAction): SagaIterator<void> {
  const { preferredSigninMethod } = payload;

  yield put(setPreferredSignIn({ preferredSigninMethod }));
}

export default all([
  takeLatest(ActionTypes.SIGN_IN_SOCIAL_REQUEST, signInSocialRequest),
  takeLatest(ActionTypes.CHANGE_PREFERRED_SIGNIN, changePreferredSignIn),
]);
