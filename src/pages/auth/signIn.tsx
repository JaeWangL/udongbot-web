import { NextSeo } from 'next-seo';
import { SignIn } from '@/containers';

function SignInPage(): JSX.Element {
  return (
    <>
      <NextSeo title="SignIn" description="SignIn" />
      <SignIn />
    </>
  );
}

export default SignInPage;
