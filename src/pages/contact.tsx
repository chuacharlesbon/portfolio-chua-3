'use-client'
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import 'tailwindcss/tailwind.css';
import { Appbar2, Footer } from "@/components";
import { Div, Spacer } from "@/components/core/Containers";
import { Images } from "@/constants/assets";
import { RouteNames } from "@/constants/constants";
import { LoadingElement } from '@/components/features/loading_element';
import { BackButton } from '@/components/features/back_button';
import { Text } from "@/components/core/TextElements";
import { ContactSlider } from '@/components/features/ContactFeatures/slider';
import { ContactContents } from '@/components/features/ContactFeatures/contents';
import UserContext, { AppWrapper } from '@/context';
import { performGTM } from '@/helpers/gtm-script';
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

export default async function Contact() {
    const [loading, setIsLoading] = React.useState(false);
    const {user, setUser} = React.useContext(UserContext);
    console.log(user);
    
    const [initPage, setInitPage] = React.useState(false);

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
    const isFASupported = await isSupported();
    // const analytics = getAnalytics(app);

    React.useEffect(() => {
        console.log("trigger");
        if(!initPage && isFASupported){
            setInitPage(true);
            // performGTM();
            const analytics = getAnalytics(app);
            logEvent(analytics, document.title, {
                path: window.location.pathname,
            });
        }
    }, [])

    return (
        <AppWrapper>
            <Head>
                <title>Charles C. | Contact</title>
                <link rel="icon" href={Images.favicon} />
                <meta name="title" content="Charles C. | Contact" />
                <meta name="description" content="Developer Portfolio - Charles Bon Chua: Full Stack Developer" />
                <meta name="keywords" content="capstone, developer, portfolio, full stack, developer, software engineer, charles bon chua, react, next, flutter, website, mobile app, web app, okada, xffiliate, cebuana, alajera, guam power, timberland" />
                <meta property="og:title" content="Charles C. | Contact" />
                <meta property="og:description" content="Developer Portfolio - Charles Bon Chua: Full Stack Developer" />
                <meta property="og:image" content={Images.deskAngle2} />
                <meta name="google-site-verification" content="V8I3HSifNNoKc_jFdX3ysuEMvJz9hBT3VOoXUEXiQS4" />
            </Head>
            <Script
                id="gtag-contact-1"
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=G-8EG7WTTNQT`}
            />
            <Script id="gtag-contact-2" strategy="lazyOnload">
                {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-8EG7WTTNQT', {
                            page_path: window.location.pathname,
                            });
                        `}
            </Script>
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
                    <Appbar2 location={RouteNames.contact} onClick={() => setIsLoading(true)} />
                    <Div
                        className='w-full min-h-screen px-4 flex flex-col items-center justify-center hidden'
                        style={{
                            backgroundImage: `url(${Images.cover})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'left',
                        }}>
                        {/* SECTIONS HERE */}
                    </Div>
                    <Div className='w-full mx-auto'>
                        <Spacer className='h-12 w-32' />
                        <BackButton onClick={() => setIsLoading(true)} />
                        <ContactSlider />
                        <ContactContents />
                    </Div>
                    <Footer />
                </Div>
            </main>
        </AppWrapper>
    )
}
