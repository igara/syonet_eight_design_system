import * as CSS from 'csstype';
import { css } from '@emotion/react';

export interface Props {
  size: number;
  color: CSS.Property.Fill;
  backgroundColor: CSS.Property.Fill;
  borderColor: CSS.Property.Stroke;
}

export const styles = {
  selectIcon: (props: Props) => css`
    width: ${props.size}px;
    height: ${props.size}px;

    circle {
      fill: ${props.backgroundColor};
      stroke: ${props.borderColor};
    }

    rect {
      fill: ${props.color};
    }
  `,
};
