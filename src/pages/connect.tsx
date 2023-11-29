'use-client'
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import 'tailwindcss/tailwind.css';
import { Appbar, Footer } from "@/components";
import { Div, Spacer } from "@/components/core/Containers";
import { Images } from "@/constants/assets";
import { RouteNames } from "@/constants/constants";
import { LoadingElement } from '@/components/features/loading_element';
import { BackButton } from '@/components/features/back_button';
import { Text } from "@/components/core/TextElements";

export default function Connect() {
    const [loading, setIsLoading] = React.useState(false);
    return (
        <>
            <Head>
                <title>Charles C. | Connect</title>
                <link rel="icon" href={Images.favicon} />
                <meta name="title" content="Charles C. | Connect" />
                <meta name="description" content="Developer Portfolio - Charles Bon Chua: Full Stack Developer" />
                <meta name="keywords" content="capstone, developer, portfolio, full stack, developer, software engineer, charles bon chua, react, next, flutter, website, mobile app, web app, okada, xffiliate, cebuana, alajera, guam power, timberland"></meta>
                <meta property="og:title" content="Charles C. | Connect" />
                <meta property="og:description" content="Developer Portfolio - Charles Bon Chua: Full Stack Developer" />
                <meta property="og:image" content={Images.favicon} />
            </Head>
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
                    <Appbar location={RouteNames.connect} onClick={() => setIsLoading(true)} />
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
                        <Text className='text-center py-40'>
                            CONNECT
                        </Text>
                    </Div>
                    <Footer />
                </Div>
            </main>
        </>
    )
}