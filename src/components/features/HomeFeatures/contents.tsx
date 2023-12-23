'use client'
import React, { FC } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import { Div, FlexColumn, FlexRow, Spacer, TextDivider } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Text } from "@/components/core/TextElements";
import { Images } from "@/constants/assets";
import { RawInput } from '@/components/core/Forms/RawInput';
import { FormLabel } from '@/components/core/Forms/FormLabel';

export const HomeContents: FC<any> = () => {

    const [myState, setState] = React.useState('');
    const [isXtendlyVisible, setXtendly] = React.useState(false);
    const [isVontosVisible, setVontos] = React.useState(false);
    const [isNewsVisible, setNews] = React.useState(false);

    return (
        <Div className='w-10/12 mx-auto p-4'>
            <div id='home-content-1' />

            <Spacer className='w-10 h-10' />
            <Text className="text-dark-100 text-2xl text-center font-semibold">
                Full Stack Developer | Xtendly
            </Text>
            <Spacer className='w-10 h-10' />
            <InView as="div" onChange={(inView, entry) => {
                if (!isXtendlyVisible) {
                    setXtendly(inView);
                }
            }}>
                {
                    isXtendlyVisible
                        ? <>
                            <motion.div
                                animate={{
                                    opacity: 1,
                                    y: 0, // Reset the y position to avoid jumping
                                }}
                                transition={{
                                    delay: 0.75,
                                    duration: 0.5,
                                    ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                }}
                                initial={{
                                    opacity: 0,
                                    y: +50, // Start the element off the top of the screen
                                }}
                            >
                                <FlexRow className='w-full items-center justify-center py-4 rounded-md shadow-lg border border-grey-500'>
                                    <Div className='w-3/5 p-4'>
                                        <Text className='text-secondary-200'>
                                            More than a year of experience in web and mobile development working with ecommerce,
                                            admin systems, marketing sites, and affiliate web apps
                                        </Text>
                                        <Text className='text-secondary-200'>
                                            Developer websites and mobile apps using React.js & Flutter.
                                        </Text>
                                    </Div>
                                    <Div className='w-1/4'>
                                        <Div
                                            className='w-40 h-40 mx-auto'
                                            style={{
                                                backgroundImage: `url(${Images.xtendlyLogo})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }} />
                                    </Div>
                                </FlexRow>
                            </motion.div>
                        </>
                        : <></>
                }
            </InView>

            <Spacer className='w-10 h-10' />
            <Text className="text-dark-100 text-2xl text-center font-semibold">
                Development Consultant | Vontos
            </Text>
            <Spacer className='w-10 h-10' />
            <InView as="div" onChange={(inView, entry) => {
                if (!isVontosVisible) {
                    setVontos(inView);
                }
            }}>
                {
                    isVontosVisible
                        ? <>
                            <motion.div
                                animate={{
                                    opacity: 1,
                                    y: 0, // Reset the y position to avoid jumping
                                }}
                                transition={{
                                    delay: 0.75,
                                    duration: 0.5,
                                    ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                }}
                                initial={{
                                    opacity: 0,
                                    y: +50, // Start the element off the top of the screen
                                }}
                            >
                                <FlexRow className='w-full items-center justify-center py-4 rounded-md shadow-lg border border-grey-500'>
                                    <Div className='w-1/4'>
                                        <Div
                                            className='w-40 h-40 mx-auto'
                                            style={{
                                                backgroundImage: `url(${Images.vontos})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }} />
                                    </Div>
                                    <Div className='w-3/5 p-4'>
                                        <Text className='text-secondary-200'>
                                            Consultations with web and mobile developers aid in achieving the projects digital objectives.

                                        </Text>
                                        <Text className='text-secondary-200'>
                                            Work independently or as part of a team, able to provide low-level technical documentations
                                        </Text>
                                    </Div>
                                </FlexRow>
                            </motion.div>
                        </>
                        : <></>
                }
            </InView>

            {/* /////////////////////// */}
            {/* News Section            */}
            {/* /////////////////////// */}
            <Spacer className='w-10 h-10' />
            <Text className="text-dark-100 text-2xl font-semibold">
                Latest News!
            </Text>
            <Spacer className='w-10 h-10' />
            <InView as="div" onChange={(inView, entry) => {
                if (!isNewsVisible) {
                    setNews(inView);
                }
            }}>
                {
                    isNewsVisible
                        ? <>
                            <motion.div
                                animate={{
                                    opacity: 1,
                                    y: 0, // Reset the y position to avoid jumping
                                }}
                                transition={{
                                    delay: 0.75,
                                    duration: 0.5,
                                    ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                }}
                                initial={{
                                    opacity: 0,
                                    y: +50, // Start the element off the top of the screen
                                }}
                            >
                                <FlexRow className='w-full items-center justify-between'>
                                    <Div className='duration-700 p-6 w-30p aspect-[3/2] border border-grey-500 rounded-lg shadow-md hover:shadow-lg hover:border-grey-400 hover:p-4'>
                                        <Div className='w-full aspect-[3/2]'>
                                            <Div
                                                className='w-full aspect-[2/1] bg-grey-400'
                                            /* style={{
                                                backgroundImage: `url(${Images.favicon})`,
                                                backgroundSize: 'contain',
                                                backgroundPosition: 'center',
                                            }} */
                                            >

                                            </Div>
                                            <Spacer className='w-2 h-2 ' />
                                            <Text className='text-primary-100 font-bold'>
                                                Timberland Bike Park App now on App Store & Google Play
                                            </Text>
                                            <Text className='text-primary-100 text-xs font-light'>
                                                December 2023
                                            </Text>
                                        </Div>
                                    </Div>
                                    <Div className='duration-700 p-6 w-30p aspect-[3/2] border border-grey-500 rounded-lg shadow-md hover:shadow-lg hover:border-grey-400 hover:p-4'>
                                        <Div className='w-full aspect-[3/2]'>
                                            <Div
                                                className='w-full aspect-[2/1] bg-grey-400'
                                            /* style={{
                                                backgroundImage: `url(${Images.favicon})`,
                                                backgroundSize: 'contain',
                                                backgroundPosition: 'center',
                                            }} */
                                            >

                                            </Div>
                                            <Spacer className='w-2 h-2 ' />
                                            <Text className='text-primary-100 font-bold'>
                                                Cebuana Lhuillier released their new website
                                            </Text>
                                            <Text className='text-primary-100 text-xs font-light'>
                                                November 2023
                                            </Text>
                                        </Div>
                                    </Div>
                                    <Div className='duration-700 p-6 w-30p aspect-[3/2] border border-grey-500 rounded-lg shadow-md hover:shadow-lg hover:border-grey-400 hover:p-4'>
                                        <Div className='w-full aspect-[3/2]'>
                                            <Div
                                                className='w-full aspect-[2/1] bg-grey-400'
                                            /* style={{
                                                backgroundImage: `url(${Images.favicon})`,
                                                backgroundSize: 'contain',
                                                backgroundPosition: 'center',
                                            }} */
                                            >

                                            </Div>
                                            <Spacer className='w-2 h-2 ' />
                                            <Text className='text-primary-100 font-bold'>
                                                Try Affiliate Marketing seamlessly with Xffiliate!
                                            </Text>
                                            <Text className='text-primary-100 text-xs font-light'>
                                                October 2022
                                            </Text>
                                        </Div>
                                    </Div>
                                </FlexRow>
                            </motion.div>
                        </>
                        : <></>
                }
            </InView>
            <Spacer className='w-10 h-10' />
        </Div>
    );
};