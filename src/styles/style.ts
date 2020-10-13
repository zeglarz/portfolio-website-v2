import { css, ThemedCssFunction } from 'styled-components/macro';

interface Sizes {
  giant: number;
  bigDesktop: number;
  desktop: number;
  tablet: number;
  thone: number;
  phablet: number;
  phone: number;
  tiny: number;
}

const sizes: Sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1024,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
};

// Iterate through the sizes and create a media template
export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    const emSize = sizes[label] / 16;

    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (max-width: ${emSize}em) {
        ${css(first, ...interpolations)}
      }
    `;
    return acc;
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<Sizes> }
);

export default media;
