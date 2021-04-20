import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { lighTheme } from '@/styles/themes';

interface ISvgWrapperProps {
  size?: number | string;
  count?: string;
  onClick?: () => void;
  onboarding?: string;
  dataCy?: string;
}
export const SvgWrapper = styled.div<ISvgWrapperProps>`
  color: inherit;
  display: inline-block;
  flex: 0 0 ${(props) => (props.size ? `${props.size}px` : '32px')};
  height: ${(props) => (props.size ? `${props.size}px` : '32px')};
  min-height: ${(props) => (props.size ? `${props.size}px` : '32px')};
  min-width: ${(props) => (props.size ? `${props.size}px` : '32px')};
  position: relative;
  width: ${(props) => (props.size ? `${props.size}px` : '32px')};

  ${(props) =>
    props.count &&
    css`
      background-color: transparent;
      &::after {
        background: ${lighTheme.bg.default};
        border: 2px solid ${lighTheme.text.default};
        border-radius: 8px;
        color: ${lighTheme.text.default};
        content: ${props.count ? `'${props.count}'` : `''`};
        font-size: 14px;
        font-weight: 600;
        left: calc(100% - 12px);
        padding: 2px 4px;
        position: absolute;
        top: -2px;
      }
    `};
`;

export const InlineSvg = styled.svg`
  bottom: 0;
  color: inherit;
  fill: currentColor;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;
