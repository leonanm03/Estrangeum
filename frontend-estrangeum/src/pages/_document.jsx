import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="corporate" className="bg-base-200" lang="en">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
