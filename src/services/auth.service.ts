import { AuthTokensDto, SignInSocialRequest } from '@/dtos';
import { HttpRequestError } from '@/exceptions';
import { createAxiosInstance } from '@/utils';

export const signInSocialAsync = async (req: SignInSocialRequest): Promise<AuthTokensDto> => {
  try {
    const res = await createAxiosInstance('/auth').post<AuthTokensDto>('/signin/social', req);

    return res.data;
  } catch (e) {
    throw new HttpRequestError('auth.service: signInSocialAsync');
  }
};
