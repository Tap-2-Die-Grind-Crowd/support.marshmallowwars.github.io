import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Marshmallow Wars - Fantasy unicorn candy adventure iOS game" />
                <meta name="theme-color" content="#ff6b9d" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <title>Marshmallow Wars - Support</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
