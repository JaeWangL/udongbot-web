import Link from 'next/link';
import React from 'react';
import { ButtonAWrapper, StyledOutlineButton } from './styles';

interface ICustomButtonProps {
  target?: string;
  internalHref?: string;
  externalHref?: string;
  children: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  isSmall?: boolean;
}

const handleLinkWrapping = (ButtonComponent: any, props: ICustomButtonProps): JSX.Element => {
  const { children, externalHref, internalHref, isDisabled, isLoading } = props;

  const renderButton = <ButtonComponent disabled={isDisabled || isLoading}>{children}</ButtonComponent>;

  if (externalHref) {
    return (
      <ButtonAWrapper href={externalHref} target="_blank" rel="noopener noreferrer">
        {renderButton}
      </ButtonAWrapper>
    );
  }
  if (internalHref) {
    return (
      <Link href={internalHref}>
        <ButtonAWrapper>{renderButton}</ButtonAWrapper>
      </Link>
    );
  }

  return renderButton;
};

export const OutlineButton = (props: ICustomButtonProps): JSX.Element => handleLinkWrapping(StyledOutlineButton, props);
