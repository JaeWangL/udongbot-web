export const lighTheme = {
  bg: {
    default: '#FFFFFF',
    reverse: '#16171A',
    wash: '#FAFAFA',
    divider: '#F6F7F8',
    border: '#EBECED',
    inactive: '#DFE7EF',
  },
  brand: {
    default: '#4400CC',
    alt: '#7B16FF',
    wash: '#E8E5FF',
    border: '#DDD9FF',
    dark: '#2A0080',
  },
  social: {
    google: {
      default: '#ea4335',
      alt: '#ea4335',
    },
    github: {
      default: '#16171A',
      alt: '#828C99',
    },
  },
  text: {
    default: '#24292E',
    secondary: '#384047',
    alt: '#67717A',
    placeholder: '#7C8894',
    reverse: '#FFFFFF',
  },
};

export const zIndex = {
  base: 1,

  background: 0,
  hidden: -1,

  card: 2,
  loading: 3,

  fullscreen: 4000,
  modal: 5000,
};

export const NAVBAR_WIDTH = 72;
export const NAVBAR_EXPANDED_WIDTH = 256;
export const MIN_PRIMARY_COLUMN_WIDTH = 600;
export const MIN_SECONDARY_COLUMN_WIDTH = 320;
export const MAX_PRIMARY_COLUMN_WIDTH = 968;
export const MAX_SECONDARY_COLUMN_WIDTH = 400;
export const COL_GAP = 24;
export const TITLEBAR_HEIGHT = 62;
export const MIN_MAX_WIDTH = MIN_PRIMARY_COLUMN_WIDTH + MIN_SECONDARY_COLUMN_WIDTH + COL_GAP;
export const MAX_WIDTH = MAX_PRIMARY_COLUMN_WIDTH + MAX_SECONDARY_COLUMN_WIDTH + COL_GAP;
export const MIN_WIDTH_TO_EXPAND_NAVIGATION = MAX_WIDTH + 256;
export const SINGLE_COLUMN_WIDTH = MAX_WIDTH;
export const MEDIA_BREAK = MIN_PRIMARY_COLUMN_WIDTH + MIN_SECONDARY_COLUMN_WIDTH + COL_GAP + NAVBAR_WIDTH * 2;

export const tint = (hex: string, amount: number): string => {
  // NOTE: for making tint color from specific color
  let R = parseInt(hex.substring(1, 3), 16);
  let G = parseInt(hex.substring(3, 5), 16);
  let B = parseInt(hex.substring(5, 7), 16);

  const getSingle = (colorNumber: number) => (colorNumber * (100 + amount)) / 100;

  R = getSingle(R);
  G = getSingle(G);
  B = getSingle(B);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const getDouble = (number: number) =>
    number.toString(16).length === 1 ? `0${number.toString(16)}` : number.toString(16);

  const RR = getDouble(R);
  const GG = getDouble(G);
  const BB = getDouble(B);

  return `#${RR}${GG}${BB}`;
};
