import styled from '@emotion/styled';
import { lighTheme, zIndex, MEDIA_BREAK } from '@/styles/themes';

export const FullscreenContent = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
  max-width: ${MEDIA_BREAK}px;
  padding: 32px 16px;
  width: 100%;

  @media (min-width: ${MEDIA_BREAK}px) {
    padding-top: 40px;
  }
`;

export const Title = styled.h1`
  color: ${lighTheme.text.default};
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.2px;
  line-height: 1.25;
  margin-bottom: 8px;
  padding: 0;
  text-align: center;
  width: 100%;
`;

export const LargeTitle = styled(Title)`
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 0.3px;
  margin-bottom: 16px;
`;

export const CodeOfConduct = styled.p`
  border-radius: 8px;
  color: ${lighTheme.text.alt};
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 64px;
  position: relative;
  text-align: center;
  z-index: ${zIndex.card + 1};

  a {
    color: ${lighTheme.brand.default};
    font-weight: 600;
  }
`;
