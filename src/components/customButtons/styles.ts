import styled from '@emotion/styled';
import { lighTheme, tint } from '@/styles/themes';

export const ButtonAWrapper = styled.a`
  align-items: center;
  display: flex;
  flex: none;
`;

interface IStyledButtonProps {
  size?: string;
}
export const StyledButton = styled.button<IStyledButtonProps>`
  align-items: center;
  background: ${lighTheme.bg.wash};
  border-radius: 32px;
  color: ${lighTheme.text.default};
  cursor: pointer;
  -webkit-display: none;
  display: flex;
  flex: none;
  font-size: ${(props) => (props.size === 'small' ? '15px' : '16px')};
  font-weight: 600;
  justify-content: center;
  line-height: 1.2;
  opacity: ${(props) => (props.disabled ? '0.6' : '1')};
  padding: ${(props) => (props.size === 'small' ? '6px 12px' : '10px 16px')};
  transition: box-shadow 0.2s ease-in-out;

  .icon:not(:first-child):not(:last-child) {
    margin-right: 4px;
  }

  &:hover {
    background: ${lighTheme.bg.border};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${lighTheme.bg.default}, 0 0 0 4px ${lighTheme.bg.border};
    transition: box-shadow 0.2s ease-in-out;
  }

  &:active {
    box-shadow: 0 0 0 2px ${lighTheme.bg.default}, 0 0 0 4px ${tint(lighTheme.bg.border, -24)};
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const StyledOutlineButton = styled(StyledButton)`
  background: transparent;
  border: 1px solid ${lighTheme.bg.border};
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    background: transparent;
    border: 1px solid ${tint(lighTheme.bg.border, -8)};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${lighTheme.bg.default}, 0 0 0 4px ${lighTheme.bg.border};
    transition: box-shadow 0.2s ease-in-out;
  }

  &:active {
    box-shadow: 0 0 0 2px ${lighTheme.bg.default}, 0 0 0 4px ${tint(lighTheme.bg.border, -24)};
    transition: box-shadow 0.2s ease-in-out;
  }
`;
