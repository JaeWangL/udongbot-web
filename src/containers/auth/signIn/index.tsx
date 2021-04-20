import React from 'react';
import IsEqual from 'react-fast-compare';
import { FullscreenView, SignInButtonSet } from '@/components';
import { CodeOfConduct, FullscreenContent, LargeTitle } from './styles';

function SignIn(): JSX.Element {
  return (
    <FullscreenView closePath="/auth/signIn">
      <FullscreenContent>
        <LargeTitle>Sign In</LargeTitle>
        <SignInButtonSet />

        <CodeOfConduct>
          By using Spectrum, you agree to our{' '}
          <a href="https://github.com/withspectrum/code-of-conduct" target="_blank" rel="noopener noreferrer">
            Code of Conduct
          </a>
          ,{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://help.github.com/en/github/site-policy/github-privacy-statement"
          >
            Privacy Statement
          </a>
          {', and '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://help.github.com/en/github/site-policy/github-terms-of-service"
          >
            Terms of Service
          </a>
          .
        </CodeOfConduct>
      </FullscreenContent>
    </FullscreenView>
  );
}

export default React.memo(SignIn, IsEqual);
