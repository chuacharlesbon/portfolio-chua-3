'use-client'
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import 'tailwindcss/tailwind.css';
import { Appbar, Footer } from "@/components";
import { Div, Spacer } from "@/components/core/Containers";
import { Text } from "@/components/core/TextElements";
import { Images } from "@/constants/assets";
import { RouteNames } from "@/constants/constants";
import { Description } from '@/components/features/HomeFeatures/description';
import { LoadingElement } from '@/components/features/loading_element';
import { HomeContents } from '@/components/features/HomeFeatures/contents';
import { DimElement } from '@/components/features/dim_element';
import { ToastDialogInfo } from '@/components/core/Toast';

export default function Home() {
    
    const [loading, setIsLoading] = React.useState(false);
    const [isDim, setDim] = React.useState(false);
    const [isToastOpen, setToastOpen] = React.useState(true);

    return (
        <>
            <Head>
                <title>Charles C. | Home</title>
                <link rel="icon" href={Images.favicon} />
                <meta name="title" content="Charles C. | Home" />
                <meta name="description" content="Developer Portfolio - Charles Bon Chua: Full Stack Developer" />
                <meta name="keywords" content="capstone, developer, portfolio, full stack, developer, software engineer, charles bon chua, react, next, flutter, website, mobile app, web app, okada, xffiliate, cebuana, alajera, guam power, timberland"/>
                <meta property="og:title" content="Charles C. | Home" />
                <meta property="og:description" content="Developer Portfolio - Charles Bon Chua: Full Stack Developer" />
                <meta property="og:image" content={Images.favicon} />
                <meta name="google-site-verification" content="V8I3HSifNNoKc_jFdX3ysuEMvJz9hBT3VOoXUEXiQS4" />
            </Head>
            <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white">
                {
                    loading ? <LoadingElement /> : <Spacer />
                }
                {
                    isDim ? <DimElement /> : <Spacer />
                }
                <ToastDialogInfo
                    title='NOTICE'
                    toastKind='info'
                    onClose={() => setToastOpen(false)}
                    isOpen={isToastOpen}
                >
                    <Text className='text-dark-100 text-center py-4'>
                    This page is currently in development. Thank you.
                    </Text>
                </ToastDialogInfo>
                <Div className='w-full min-h-screen'>
                    <Appbar
                        onDimBackground={setDim}
                        location={RouteNames.home}
                        onClick={() => setIsLoading(true)}
                    />
                    <Div className='w-full min-h-screen px-4 flex flex-col items-center justify-center' style={{
                        backgroundImage: `url(${Images.cover})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                    }}>
                        <Description />
                        <Script
                            async id="g-ads-1"
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8167368561700289"
                            crossOrigin="anonymous"
                            strategy="afterInteractive" />
                        <Script id="g-ads-2">
                            (adsbygoogle = window.adsbygoogle || []).push({ });
                        </Script>
                        <ins className="adsbygoogle"
                            style={{ display: "block" }}
                            data-ad-client="ca-pub-8167368561700289"
                            data-ad-slot="7948594043"
                            data-ad-format="auto"
                            data-full-width-responsive="true"
                        ></ins>
                    </Div>
                    <HomeContents />
                    <Footer isDarkTheme={true} />
                </Div>
            </main>
        </>
    )
}
