import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import IsEqual from 'react-fast-compare';
import { ClusterFour, ClusterOne, ClusterThree, ClusterTwo } from '@/styles/globals';
import CustomIcon from '../customIcon';
import { CloseLink, FullscreenViewContainer, Illustrations } from './styles';

interface IFullscreenViewProps {
  closePath: string;
  children: React.ReactNode;
}

function FullscreenView(props: IFullscreenViewProps): JSX.Element {
  const { children, closePath } = props;
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // If person taps esc, close the dialog
      if (e.key === 'Esc' || e.key === 'Escape') {
        router.push(closePath);
      }
    };

    document.addEventListener('keydown', handleKeyPress, false);

    return () => {
      document.removeEventListener('keydown', handleKeyPress, false);
    };
  }, []);

  return (
    <FullscreenViewContainer>
      <Link href={closePath}>
        <CloseLink>
          <CustomIcon glyph="view-close" size={32} />
        </CloseLink>
      </Link>

      <Illustrations>
        <ClusterOne src="/icons/cluster-2.svg" role="presentation" />
        <ClusterTwo src="/icons/cluster-1.svg" role="presentation" />
        <ClusterThree src="/icons/cluster-5.svg" role="presentation" />
        <ClusterFour src="/icons/cluster-4.svg" role="presentation" />
      </Illustrations>
      {children}
    </FullscreenViewContainer>
  );
}

export default React.memo(FullscreenView, IsEqual);
