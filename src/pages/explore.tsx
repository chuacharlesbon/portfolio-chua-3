'use-client'
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import 'tailwindcss/tailwind.css';
import { GiGears } from "react-icons/gi";
import { IoWarning } from "react-icons/io5";
import { Appbar2, Footer } from "@/components";
import { Div, FlexRow, FlexColumn, Spacer, TextDivider } from "@/components/core/Containers";
import { Images } from "@/constants/assets";
import { RouteNames } from "@/constants/constants";
import { LoadingElement } from '@/components/features/loading_element';
import { BackButton } from '@/components/features/back_button';
import { Text } from "@/components/core/TextElements";

export default function Explore() {
    const [loading, setIsLoading] = React.useState(false);
    return (
        <>
            <Head>
                <title>Charles C. | Explore</title>
                <link rel="icon" href={Images.favicon} />
                <meta name="title" content="Charles C. | Explore" />
                <meta name="description" content="Developer Portfolio - Charles Bon Chua: Full Stack Developer" />
                <meta name="keywords" content="capstone, developer, portfolio, full stack, developer, software engineer, charles bon chua, react, next, flutter, website, mobile app, web app, okada, xffiliate, cebuana, alajera, guam power, timberland"></meta>
                <meta property="og:title" content="Charles C. | Explore" />
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
                    <Appbar2 location={RouteNames.explore} onClick={() => setIsLoading(true)} />
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
                            Page not found: EXPLORE
                        </Text>
                        <Text className='text-center text-2xl'>
                            We are working on it.
                        </Text>
                        <Spacer className='h-40 w-32' />
                    </Div>
                    <Div className='w-full mx-auto'>
                        <Spacer className='h-12 w-32' />
                        <Div
                            className='w-full'
                            style={{
                                backgroundImage: `url(${Images.coverFood})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <Spacer className='h-12 w-32' />
                            <Div className='w-full py-4 bg-white bg-opacity-75'>
                                <TextDivider
                                    className='bg-grey-100 phone:hidden tabletWide:block'
                                    textType='center'
                                    textElement={
                                        <Text className='text-xl tabletWide:w-1/3 tabletWide:text-3xl text-dark-100 text-center font-serif uppercase'>
                                            Food and Recipes
                                        </Text>
                                    }
                                />
                            </Div>
                            <Div
                                className='w-full bg-white bg-opacity-25 py-10 laptop:py-20'
                            >
                                <FlexRow className='phone:flex-col tablet:flex-row mx-auto p-4 w-full laptop:w-10/12 justify-center items-center'>
                                    <Div
                                        className='w-full tablet:w-1/2 tabletWide:w-2/5 laptopSm:w-1/3 aspect-[2/3]'
                                        style={{
                                            backgroundImage: `url(${Images.cook})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                    <FlexColumn className='w-full tablet:w-1/2 tabletWide:w-2/5 laptopSm:w-1/3 aspect-[2/3] items-center justify-center bg-white bg-opacity-75'>
                                        <Text className='italic font-serif w-64 tablet:w-72'>
                                            Around three years of expertise in food standards and production in the food industry.
                                        </Text>
                                        <Spacer className='h-10 w-10' />
                                        <Text className='italic font-serif w-64 tablet:w-72'>
                                            Trained a set of individuals teaching different skills in terms of cooking and creativity.
                                        </Text>
                                    </FlexColumn>
                                </FlexRow>
                                <Spacer className='h-10 w-10 laptop:h-20' />
                                <FlexRow className='phone:flex-col tablet:flex-row mx-auto p-4 w-full laptop:w-10/12 justify-center items-center'>
                                    <Div
                                        className='w-full tablet:hidden tablet:w-1/2 tabletWide:w-2/5 laptopSm:w-1/3 aspect-[2/3]'
                                        style={{
                                            backgroundImage: `url(${Images.recipe1})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                    <FlexColumn className='w-full tablet:w-1/2 tabletWide:w-2/5 laptopSm:w-1/3 aspect-[2/3] items-center justify-center bg-white bg-opacity-75'>
                                        <Text className='italic font-serif w-64 tablet:w-72'>
                                            Dive into the Delectable Depths of Kare-Kare: A Culinary Tour of a Filipino Treasure
                                        </Text>
                                        <Spacer className='h-10 w-10' />
                                        <Text className='italic font-serif w-64 tablet:w-72'>
                                            Kare-kare is more than just a dish. It is a symbol of Filipino family gatherings, of festive occasions, of shared laughter and warm memories. It is a dish that nourishes not just the body, but also the soul.
                                        </Text>
                                    </FlexColumn>
                                    <Div
                                        className='phone:hidden w-full tablet:block tablet:w-1/2 tabletWide:w-2/5 laptopSm:w-1/3 aspect-[2/3]'
                                        style={{
                                            backgroundImage: `url(${Images.recipe1})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                </FlexRow>
                            </Div>
                        </Div>
                        <Div
                            className='w-full'
                            style={{
                                backgroundImage: `url(${Images.coverAnime})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <Spacer className='h-12 w-32' />
                            <Div className='w-full py-4 bg-white bg-opacity-75'>
                                <TextDivider
                                    className='bg-grey-100 phone:hidden tabletWide:block'
                                    textType='center'
                                    textElement={
                                        <Text className='text-xl tabletWide:w-1/3 tabletWide:text-3xl text-dark-100 text-center font-serif uppercase'>
                                            Illustrations and Digital Arts
                                        </Text>
                                    }
                                />
                            </Div>
                            <Div
                                className='w-full bg-white bg-opacity-25 py-10 laptop:py-20'
                            >
                                <FlexRow className='phone:flex-col tablet:flex-row mx-auto p-4 w-full laptop:w-10/12 justify-center items-center'>
                                    <Div
                                        className='w-full tablet:w-1/2 tabletWide:w-2/5 laptopSm:w-1/3 aspect-[3/4]'
                                        style={{
                                            backgroundImage: `url(${Images.animeFilo})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                    <FlexColumn className='w-full tablet:w-1/2 tabletWide:w-2/5 laptopSm:w-1/3 aspect-[3/4] items-center justify-center bg-white bg-opacity-75'>
                                        <Text className='italic font-serif w-64 tablet:w-72 text-xl'>
                                            Digital Work # 1
                                        </Text>
                                        <Spacer className='h-10 w-10' />
                                        <Text className='italic font-serif w-64 tablet:w-72'>
                                            Filo (フィーロ Fīro?) is a Filolial purchased alongside Raphtalia during the outset of the story who develops into a Filolial Queen due to her association with the Shield Hero and she is a staunch ally to the hero, as the possessor of unique class-up effects. She also becomes particularly close to the Second Princess Melty Q Melromarc.
                                        </Text>
                                    </FlexColumn>
                                </FlexRow>
                                <Spacer className='h-10 w-10 laptop:h-20' />
                                <FlexRow className='phone:flex-col tablet:flex-row mx-auto p-4 w-full laptop:w-10/12 justify-center items-center'>
                                    <Div
                                        className='w-full tablet:hidden tablet:w-1/2 tabletWide:w-2/5 laptopSm:w-1/3 aspect-[3/4]'
                                        style={{
                                            backgroundImage: `url(${Images.animeRap})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                    <FlexColumn className='w-full tablet:w-1/2 tabletWide:w-2/5 laptopSm:w-1/3 aspect-[3/4] items-center justify-center bg-white bg-opacity-75'>
                                        <Text className='italic font-serif w-64 tablet:w-72 text-xl'>
                                            Digital Work # 2
                                        </Text>
                                        <Spacer className='h-10 w-10' />
                                        <Text className='italic font-serif w-64 tablet:w-72'>
                                            Raphtalia (ラフタリア Rafutaria?) is the main heroine and deuteragonist of The Rising of the Shield Hero series. She is the first real companion of the Shield Hero, Naofumi Iwatani. Although she was originally bought as his slave, she was never abused, even finding herself bonding with him.
                                        </Text>
                                    </FlexColumn>
                                    <Div
                                        className='phone:hidden w-full tablet:block tablet:w-1/2 tabletWide:w-2/5 laptopSm:w-1/3 aspect-[3/4]'
                                        style={{
                                            backgroundImage: `url(${Images.animeRap})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                </FlexRow>
                            </Div>
                        </Div>
                    </Div>
                    <Footer />
                </Div>
            </main>
        </>
    )
}