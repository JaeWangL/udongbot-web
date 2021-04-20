import styled from '@emotion/styled';
import { zIndex, MEDIA_BREAK, TITLEBAR_HEIGHT } from './themes';

export const ViewGrid = styled.main`
  display: grid;
  grid-area: main;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
  overflow-y: auto;

  @media (max-width: ${MEDIA_BREAK}px) {
    max-height: calc(100vh - ${TITLEBAR_HEIGHT}px);
  }
`;
ViewGrid.defaultProps = { id: 'main', className: 'view-grid' };

export const Cluster = styled.img`
  opacity: 0.05;
  position: absolute;
`;

export const ClusterOne = styled(Cluster)`
  left: 10%;
  max-height: 120px;
  max-width: 120px;
  top: 10%;
  z-index: ${zIndex.background};
`;

export const ClusterTwo = styled(Cluster)`
  max-height: 160px;
  max-width: 160px;
  right: 10%;
  top: 60%;
  z-index: ${zIndex.background};
`;

export const ClusterThree = styled(Cluster)`
  max-height: 80px;
  max-width: 80px;
  right: 40%;
  top: 10%;
  z-index: ${zIndex.background};
`;

export const ClusterFour = styled(Cluster)`
  left: 40%;
  max-height: 80px;
  max-width: 80px;
  top: 80%;
  z-index: ${zIndex.background};
`;
