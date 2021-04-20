import styled from '@emotion/styled';
import { OutlineButton } from '@/components';
import { lighTheme, zIndex } from '@/styles/themes';

export const Container = styled.div`
  align-items: flex-end;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  padding: 16px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  grid-column: 1 / 2 span;
`;

interface ISigninButtonProps {
  showAfter: boolean;
}
export const SigninButton = styled.div<ISigninButtonProps>`
  align-items: center;
  align-self: flex-start;
  border-radius: 32px;
  color: ${lighTheme.text.reverse};
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: flex-row;
  font-size: 15px;
  font-weight: 600;
  justify-content: flex-start;
  padding: 8px 16px;
  position: relative;
  width: 100%;
  z-index: ${zIndex.card + 1};
  ${(props) => props.showAfter && `margin-top: 32px`};
  ${(props) =>
    props.showAfter &&
    `
    &:after {
        content: 'Previously signed in with';
        position: absolute;
        top: -32px;
        font-size: 14px;
        font-weight: 600;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        text-align: center;
        color: ${lighTheme.text.alt};
      }
    `} svg {
    fill: currentColor !important;
  }
`;

interface IGoogleButtonProps {
  isPreferred: boolean;
}
export const GoogleButton = styled(SigninButton)<IGoogleButtonProps>`
  background: ${(props) => (props.isPreferred ? lighTheme.social.google.default : 'none')};
  color: ${(props) => (props.isPreferred ? '#fff' : lighTheme.social.google.default)};

  &::after {
    color: ${lighTheme.social.google.default};
  }
`;

export const Label = styled.span`
  color: currentColor;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  line-height: 2.45;
  margin-left: 8px;
  margin-top: -1px;
  white-space: nowrap;
  word-break: keep-all;
`;

export const SignUpContainer = styled.div`
  grid-column: span 2;
`;

export const PaddingLine = styled.div`
  padding: 16px;
`;

export const SignUpButton = styled(OutlineButton)`
  width: 100%;
`;
