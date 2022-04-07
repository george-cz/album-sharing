import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

const GA = () => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-14S8MJFT41"
      async
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-14S8MJFT41');
        `}
    </Script>
  </>
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GA />
    </>
  );
}

export default MyApp;
