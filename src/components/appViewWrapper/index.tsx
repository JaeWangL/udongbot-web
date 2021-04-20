import { useRouter } from 'next/router';
import React from 'react';
import IsEqual from 'react-fast-compare';
import { StyledAppViewWrapper } from './styles';

function AppViewWrapper(): JSX.Element {
  const router = useRouter();

  const isMarketingPage = isViewingMarketingPage(history, currentUser);
  const isViewingExplore = router.pathname === '/explore';
  const isTwoColumn = isViewingExplore || !isMarketingPage;

  return <StyledAppViewWrapper ref={(el) => (this.ref = el)} isTwoColumn={isTwoColumn} />;
}

export default React.memo(AppViewWrapper, IsEqual);
