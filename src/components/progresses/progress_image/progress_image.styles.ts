import { css } from '@emotion/react';

type Downloading = {
  percent: number;
};

export const styles = {
  progress_image: () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `,
  featching: () => css`
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform: rotate(-90deg);
    animation: 1s linear infinite loading;

    circle {
      fill: none;
      stroke: #c4c4c4;
      stroke-width: 14;
      stroke-dasharray: 100;
      stroke-dashoffset: 70;
    }

    @keyframes loading {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,
  downloading: (props: Downloading) => css`
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform: rotate(-90deg);

    circle {
      fill: none;
      stroke: #000000;
      stroke-width: 14;
      stroke-dasharray: 100;
      stroke-dashoffset: calc(100 - ${props.percent});
    }
  `,
  closeIcon: () => css`
    width: 100%;
    height: 100%;

    svg {
      width: 100%;
      height: 100%;
    }
  `,
};
