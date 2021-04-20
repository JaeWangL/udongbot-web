import styled from '@emotion/styled';
import {
  MEDIA_BREAK,
  TITLEBAR_HEIGHT,
  NAVBAR_WIDTH,
  NAVBAR_EXPANDED_WIDTH,
  MIN_WIDTH_TO_EXPAND_NAVIGATION,
} from '@/styles/themes';

interface IStyledAppViewWrapperProps {
  isTwoColumn?: boolean;
}
export const StyledAppViewWrapper = styled.div<IStyledAppViewWrapperProps>`
  display: grid;
  grid-template-areas: ${(props) => (props.isTwoColumn ? "'navigation main'" : "'main'")};
  grid-template-columns: ${(props) => (props.isTwoColumn ? `${NAVBAR_WIDTH}px 1fr` : '1fr')};
  width: 100%;

  @media (max-width: ${MEDIA_BREAK}px) {
    grid-template-areas: ${(props) => (props.isTwoColumn ? "'titlebar' 'main'" : "'main'")};
    grid-template-columns: 1fr;
    grid-template-rows: ${(props) => (props.isTwoColumn ? `${TITLEBAR_HEIGHT}px 1fr` : '1fr')};
  }

  @media (min-width: ${MIN_WIDTH_TO_EXPAND_NAVIGATION}px) {
    grid-template-areas: ${(props) => (props.isTwoColumn ? "'navigation main'" : "'main'")};
    grid-template-columns: ${(props) => (props.isTwoColumn ? `${NAVBAR_EXPANDED_WIDTH}px 1fr` : '1fr')};
  }
`;
