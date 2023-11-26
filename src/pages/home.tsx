import Head from 'next/head';
import Script from 'next/script';
import 'tailwindcss/tailwind.css';
import { Appbar, Footer, SearchField } from "@/components";
import { Div, Spacer } from "@/components/core/Containers";
import { Text } from "@/components/core/TextElements";
import { Images } from "@/constants/assets";
import { RouteNames } from "@/constants/constants";
import { CoverFeature } from '@/pages/HomeFeatures/cover';

export default function Home() {
    return (
        <>
            <Head>
                <title>Charles C. | Home</title>
                <link rel="icon" href={Images.favicon} />
                <meta name="title" content="Charles C. | Home" />
                <meta name="description" content="Developer Portfolio - Charles Bon Chua: Full Stack Developer" />
                <meta name="keywords" content="capstone, developer, portfolio, full stack, developer, software engineer, charles bon chua, react, next, flutter, website, mobile app, web app, okada, xffiliate, cebuana, alajera, guam power, timberland"></meta>
                <meta property="og:title" content="Charles C. | Home" />
                <meta property="og:description" content="Developer Portfolio - Charles Bon Chua: Full Stack Developer" />
                <meta property="og:image" content={Images.favicon} />
            </Head>
            <Script async id="g-ads-1" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8167368561700289"
                crossOrigin="anonymous"></Script>
            <Script id="g-ads-2">
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </Script>
            <main className="flex min-h-screen w-full flex-col items-center justify-between bg-purple-100">
                <Div className='w-full'>
                    <Appbar location={RouteNames.home} />
                    <Div className='w-full px-4 desktop:px-0 desktop:w-1440px'>
                        <Spacer className="h-12" />
                        {/* <SearchField /> */}
                        <CoverFeature />
                        <ins className="adsbygoogle"
                            style={{ display: "block" }}
                            data-ad-client="ca-pub-8167368561700289"
                            data-ad-slot="7948594043"
                            data-ad-format="auto"
                            data-full-width-responsive="true"
                        ></ins>
                        <Footer />
                    </Div>
                </Div>
            </main>
        </>
    )
}