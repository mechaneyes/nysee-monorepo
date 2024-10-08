import { AppProps } from "next/app";
import Head from 'next/head';
import "@/styles/globals.css";
import "@/styles/index.css";
import "@/styles/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
