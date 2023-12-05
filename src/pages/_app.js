import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from "next/head";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont"
})
/**
 * Renders the main application component.
 * 
 * @param {Object} props - The component props.
 * @param {React.ComponentType} props.Component - The component to render.
 * @param {Object} props.pageProps - The props to pass to the component.
 * @returns {JSX.Element} The rendered component.
 */
export default function App({ Component, pageProps }) {
    return (
        <>
            {/* Set the viewport and favicon */}
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
                {/* Render the Navbar component */}
                <Navbar/> 
                {/* Render the specified component with the given props */}
                <Component {...pageProps} />
            </main>
        </>
    )
}
