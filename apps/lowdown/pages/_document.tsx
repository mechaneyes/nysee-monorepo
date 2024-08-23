import Document, { Html, Head, Main, NextScript } from "next/document";

class NYSeeDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/xgi8mni.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NYSeeDocument;
