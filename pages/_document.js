import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>AltSearch - Home</title>
            </Head>
            <body className='g-sidenav-show bg-gray-100'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}