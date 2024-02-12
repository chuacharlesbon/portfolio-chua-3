'use-client'
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import 'tailwindcss/tailwind.css';
import { GiGears } from "react-icons/gi";
import { IoWarning } from "react-icons/io5";
import { Appbar2, Footer } from "@/components";
import { Div, Spacer, FlexColumn } from "@/components/core/Containers";
import { Icons, Images } from "@/constants/assets";
import { RedirectionURL, RouteNames } from "@/constants/constants";
import { LoadingElement } from '@/components/features/loading_element';
import { BackButton } from '@/components/features/back_button';
import { Text } from "@/components/core/TextElements";
import { performGTM } from '@/helpers/gtm-script';
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';

export async function getStaticProps() {
    const firebaseConfig = {
        apiKey: "AIzaSyDyJ77768PKJECg-hHgqGNcnovTSIxiqXs",
        authDomain: "my-portfolio-73bbd.firebaseapp.com",
        projectId: "my-portfolio-73bbd",
        storageBucket: "my-portfolio-73bbd.appspot.com",
        messagingSenderId: "633292878880",
        appId: "1:633292878880:web:e0f6c065300d7dd9367845",
        measurementId: "G-8EG7WTTNQT"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics: any = await isSupported().then(yes => yes ? getAnalytics(app) : null);

    return {
      // Pass data as a prop to the page component
      props: {
        faAnalytics: analytics,
      },
    };
}

export default function Connect({ faAnalytics, ...otherProps} : {faAnalytics: any;}) {
    const [loading, setIsLoading] = React.useState(false);
    const [initPage, setInitPage] = React.useState(false);

    React.useEffect(() => {
        console.log("trigger");
        if (!initPage && faAnalytics) {
            setInitPage(true);
            performGTM();
            logEvent(faAnalytics, document.title, {
                path: window.location.pathname,
            });
            console.log(`trigger fa gtm ${window.location.pathname}`);
        }
    }, [])

    return (
        <>
            <Head>
                <title>Charles C. | Connect</title>
                <link rel="icon" href={Images.favicon} />
                <meta name="title" content="Charles C. | Connect" />
                <meta name="description" content="Developer Portfolio - Charles Bon Chua: Full Stack Developer" />
                <meta name="keywords" content="capstone, developer, portfolio, full stack, developer, software engineer, charles bon chua, react, next, flutter, website, mobile app, web app, okada, xffiliate, cebuana, alajera, guam power, timberland" />
                <meta property="og:title" content="Charles C. | Connect" />
                <meta property="og:description" content="Developer Portfolio - Charles Bon Chua: Full Stack Developer" />
                <meta property="og:image" content={Images.favicon} />
                <meta name="google-site-verification" content="V8I3HSifNNoKc_jFdX3ysuEMvJz9hBT3VOoXUEXiQS4" />
            </Head>
            <Script
                id="gtag-connect-1"
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=G-8EG7WTTNQT`}
            />
            <Script
                id="gtag-connect-2"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-8EG7WTTNQT', {
                page_path: window.location.pathname,
                });`,
                }}
            />
            <Script async id="g-ads-1" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8167368561700289"
                crossOrigin="anonymous"></Script>
            <Script id="g-ads-2">
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </Script>
            <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white">
                {
                    loading ? <LoadingElement /> : <Spacer />
                }
                <Div className='w-full min-h-screen'>
                    <Appbar2 location={RouteNames.connect} onClick={() => setIsLoading(true)} />
                    <Div
                        className='w-full min-h-screen px-4 flex flex-col items-center justify-center hidden'
                        style={{
                            backgroundImage: `url(${Images.cover})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'left',
                        }}>
                        {/* SECTIONS HERE */}
                    </Div>
                    <Div className='w-full mx-auto hidden'>
                        <Spacer className='h-40 w-32' />
                        <BackButton onClick={() => setIsLoading(true)} />
                        <Div className="relative mx-auto w-32">
                            <GiGears className="text-9xl text-grey-400 text-center mx-auto" />
                            <IoWarning className="absolute text-red-400 bottom-0 right-0 text-4xl" />
                        </Div>
                        <Spacer className='h-8 w-32' />
                        <Text className='text-center text-secondary-200 font-light'>
                            Page not found: CONNECT
                        </Text>
                        <Text className='text-center text-2xl'>
                            We are working on it.
                        </Text>
                        <Spacer className='h-40 w-32' />
                    </Div>
                    <Div className='w-full mx-auto'>
                        <Spacer className='h-12 w-32' />
                        <Div
                            className='w-full bg-grey-600 py-10 laptop:py-20'
                            style={{
                                backgroundImage: `url(${Images.backGalaxy})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <Div className='mx-auto text-center grid grid-cols-2 tablet:w-3/4 laptopSm:w-3/5 laptopSm:grid-cols-4 gap-4 items-center justify-center'>
                                <a
                                    className='flex flex-col duration-700 w-24 h-24 tablet:w-52 tablet:h-52 aspect-square items-center justify-between bg-opacity-10 bg-blue-100 hover:bg-opacity-50 rounded-xl mx-auto p-4'
                                    href={RedirectionURL.facebookUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Div
                                        className='mx-auto text-center rounded-md w-10 h-10 tablet:w-36 tablet:h-36'
                                        style={{
                                            backgroundImage: `url(${Images.facebookLogo})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                    <Text className='text-secondary-200 text-white font-bold'>
                                        Facebook
                                    </Text>
                                </a>
                                <a
                                    className='flex flex-col duration-700 w-24 h-24 tablet:w-52 tablet:h-52 aspect-square items-center justify-between bg-opacity-10 bg-blue-100 hover:bg-opacity-50 rounded-xl mx-auto p-4'
                                    href={RedirectionURL.gitlabUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Div
                                        className='mx-auto text-center rounded-md w-10 h-10 tablet:w-36 tablet:h-36'
                                        style={{
                                            backgroundImage: `url(${Images.gitlabLogo})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                    <Text className='text-secondary-200 text-white font-bold'>
                                        Gitlab
                                    </Text>
                                </a>
                                <a
                                    className='flex flex-col duration-700 w-24 h-24 tablet:w-52 tablet:h-52 aspect-square items-center justify-between bg-opacity-10 bg-blue-100 hover:bg-opacity-50 rounded-xl mx-auto p-4'
                                    href={RedirectionURL.linkedInUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Div
                                        className='mx-auto text-center rounded-md w-10 h-10 tablet:w-36 tablet:h-36'
                                        style={{
                                            backgroundImage: `url(${Images.linkedInLogo})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                    <Text className='text-secondary-200 text-white font-bold'>
                                        LinkedIn
                                    </Text>
                                </a>
                                <a
                                    className='flex flex-col duration-700 w-24 h-24 tablet:w-52 tablet:h-52 aspect-square items-center justify-between bg-opacity-10 bg-blue-100 hover:bg-opacity-50 rounded-xl mx-auto p-4'
                                    href={RedirectionURL.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Div
                                        className='mx-auto text-center rounded-md w-10 h-10 tablet:w-36 tablet:h-36'
                                        style={{
                                            backgroundImage: `url(${Images.githubLogo2})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                    <Text className='text-secondary-200 text-white font-bold'>
                                        Github
                                    </Text>
                                </a>
                            </Div> 
                        </Div>
                    </Div>
                    <Footer />
                </Div>
            </main>
        </>
    )
}