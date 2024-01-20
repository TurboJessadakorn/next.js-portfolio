import type { AppProps } from 'next/app'
import Head from "next/head";
import Navbar from '../components/Navbar';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            return <Component {...pageProps} />
        </>

    );


}