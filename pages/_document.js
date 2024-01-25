import { Html, Head, Main, NextScript } from "next/document";

import { siteMeta } from 'lib/constants'
const { siteLang } = siteMeta

export default function Document() {
  return (
    //<Html lang="en">
    <Html lang={siteLang}> 
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
