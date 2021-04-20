import React from 'react';
import IsEqual from 'react-fast-compare';
import { CustomIcon } from '@/components';
import { ButtonWrapper, GoogleButton, Label } from '../styles';

interface IGoogleSignInButtonProps {
  isPreferred: boolean;
  showAfter: boolean;
}

function GoogleSignInButton(props: IGoogleSignInButtonProps): JSX.Element {
  const { isPreferred, showAfter } = props;

  return (
    <ButtonWrapper>
      <GoogleButton showAfter={showAfter} isPreferred={isPreferred}>
        <CustomIcon glyph="google" />
        <Label>Log in with Google</Label>
      </GoogleButton>
    </ButtonWrapper>
  );
}

export default React.memo(GoogleSignInButton, IsEqual);
