import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head nonce={'test'} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
