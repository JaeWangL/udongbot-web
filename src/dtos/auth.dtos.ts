export enum SocialSignInType {
  Google = 0,
  Apple = 1,
}

export enum RolesEnum {
  USER = 0,
  ADMIN = 1,
}

// ----------------- For POST, PUT, DELETE -----------------
export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInSocialRequest {
  email: string;
  name?: string;
  profileUrl?: string;
  socialType: SocialSignInType;
  socialId: string;
}

// ----------------- for GET -----------------
export interface AuthTokensDto {
  accessToken: string;
  refreshToken: string;
}

export interface DecodedUser {
  id: number;
  email: string;
  userName: string;
  name: string;
  profileUrl: string;
  role: RolesEnum;
  iat: number;
  exp: number;
}
