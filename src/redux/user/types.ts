import { DecodedUser, SocialSignInType } from '@/dtos';

export interface SignInSocialRequestPayload {
  email: string;
  name?: string;
  profileUrl?: string;
  socialType: SocialSignInType;
  socialId: string;
}

export interface SignInSocialSuccessPayload {
  user: DecodedUser;
}

export interface SignInSocialFailurePayload {
  errorMsg: string;
}

export interface ChangePreferredSignInPayload {
  preferredSigninMethod: string;
}

export interface SetPreferredSignInPayload {
  preferredSigninMethod: string;
}

export type Payload =
  | SignInSocialRequestPayload
  | SignInSocialSuccessPayload
  | SignInSocialFailurePayload
  | ChangePreferredSignInPayload
  | SetPreferredSignInPayload;
