import styled from '@emotion/styled';
import { lighTheme, zIndex, MEDIA_BREAK } from '@/styles/themes';

export const FullscreenViewContainer = styled.div`
  align-items: center;
  background: #fff;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  left: 0;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  width: 100%;
  z-index: ${zIndex.fullscreen};
`;

export const CloseLink = styled.a`
  color: ${lighTheme.text.default};
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const Illustrations = styled.span`
  z-index: ${zIndex.background};

  @media screen and (max-width: ${MEDIA_BREAK}px) {
    display: none;
  }
`;
