import React from 'react';
import * as Styles from './progress_image.styles';
import { SerializedStyles, css } from '@emotion/react';

interface Props {
  css?: SerializedStyles;
  src: string;
  alt: string;
}

export const ProgressImage: React.FC<Props> = (props) => {
  const imageURI = props.src;

  const [percent, setPercent] = React.useState(0);

  React.useEffect(() => {
    fetch(imageURI).then((res) => {
      if (!res.body) return;
      // body の reader を取得する
      let reader = res.body.getReader();

      // 全体サイズ
      const headerContentLength = res.headers.get('content-length');
      if (!headerContentLength) {
        reader.read().then((result) => {
          processResult(result);
        });
        return;
      }

      const total = +headerContentLength;

      let chunk = 0;

      const processResult = (result: ReadableStreamDefaultReadResult<Uint8Array>) => {
        // done が true なら最後の chunk
        if (result.done) {
          setPercent(100);
          return;
        }

        // chunk の値
        chunk += result.value.length;

        // 再帰する
        reader.read().then(processResult);

        setPercent(Math.round((chunk / total) * 100));
      };

      // read() を呼ぶことで chunk を resolve する Promise が返る
      reader.read().then((result) => {
        processResult(result);
      });
    });
  }, []);

  const attributes = {
    css: css`
      ${Styles.styles.progress_image()}
      ${props.css}
    `,
  };
  return (
    <div {...attributes}>
      {percent === 0 && (
        <svg viewBox="0 0 64 64" css={Styles.styles.featching()}>
          <circle cx="50%" cy="50%" r="15.9154" />
        </svg>
      )}

      {percent !== 100 && (
        <svg viewBox="0 0 64 64" css={Styles.styles.downloading({ percent })}>
          <circle cx="50%" cy="50%" r="15.9154" />
        </svg>
      )}

      {percent === 100 && <img src={props.src} alt={props.alt} />}
    </div>
  );
};
