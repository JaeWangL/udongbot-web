import React from 'react';
import IsEqual from 'react-fast-compare';
import { useUserStore } from '@/hooks';
import { Container, PaddingLine, SignUpContainer, SignUpButton } from './styles';
import GoogleSignInButton from './google';

function SignInButtonSet(): JSX.Element {
  const { user } = useUserStore();

  return (
    <Container>
      <GoogleSignInButton
        isPreferred={user.preferredSigninMethod === 'google'}
        showAfter={user.preferredSigninMethod === 'google'}
      />

      <SignUpContainer>
        <PaddingLine />
        <SignUpButton internalHref="/auth/signUp">New to Spectrum? Click here to sign up.</SignUpButton>
      </SignUpContainer>
    </Container>
  );
}

export default React.memo(SignInButtonSet, IsEqual);
