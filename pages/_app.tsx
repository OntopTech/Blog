import 'bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script'
import '../styles/styled.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.BLOG_ONTOP_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="my-script">
        {` 
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.BLOG_ONTOP_GOOGLE_ANALYTICS});
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
