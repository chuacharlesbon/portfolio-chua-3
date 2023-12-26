import React, { FC } from 'react';
import Image from 'next/image';
import { Div, FlexColumn, FlexRow, Spacer, TextDivider } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Text } from "@/components/core/TextElements";
import { Icons, Images } from "@/constants/assets";
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ImSpinner } from 'react-icons/im';

export const AboutContents: FC<any> = () => {

    const [isWorkVisible, setWork] = React.useState(false);
    const [isTrainingVisible, setTraining] = React.useState(false);
    const [isAcademicVisible, setAcademic] = React.useState(false);

    return (
        <Div className='w-full bg-grey-600'>
            <Div className='w-10/12 mx-auto p-4'>

                {/* /////////////////////////// */}
                {/* Marketplace Section         */}
                {/* /////////////////////////// */}
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <div id='about-content-1' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Marketplace and Corporate
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isWorkVisible) {
                        setTimeout(() => {
                            setWork(inView);
                        }, 750);
                    }
                }}>
                    {
                        isWorkVisible
                            ? <Div className='py-4 laptopSm:py-8 laptop:py-12 rounded-md shadow-lg bg-white'>
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
                                        <Div className='w-1/5'>
                                            <Div
                                                className='w-12 h-12 laptop:w-16 laptop:h-16 desktop:w-20 desktop:h-20 mx-auto'
                                                style={{
                                                    backgroundImage: `url(${Images.xtendlyLogo})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }} />
                                        </Div>
                                        <Div className='w-4/5 p-4'>
                                            <Text className='text-secondary-200 font-semibold'>
                                                Xtendly Philippines, Inc.
                                            </Text>
                                            <Text className='text-secondary-200 text-xs'>
                                                Since May 2022
                                            </Text>
                                            <Spacer className='w-4 h-4' />
                                            <Text className='text-secondary-200'>
                                                &#8226; More than a year of experience in web and mobile development working with ecommerce,
                                                admin systems, marketing sites, and affiliate web apps
                                            </Text>
                                            <Text className='text-secondary-200'>
                                                &#8226; Developer websites and mobile apps using React.js & Flutter.
                                            </Text>
                                            <Text className='text-secondary-200'>
                                                &#8226; Setup Firebase, GCP, App Store
                                            </Text>
                                        </Div>
                                    </FlexRow>
                                </motion.div>
                                <Spacer className='w-4 h-4 laptop:h-6 desktop:h-8' />
                                <motion.div
                                    animate={{
                                        opacity: 1,
                                        y: 0, // Reset the y position to avoid jumping
                                    }}
                                    transition={{
                                        delay: 1.25,
                                        duration: 0.5,
                                        ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                    }}
                                    initial={{
                                        opacity: 0,
                                        y: +50, // Start the element off the top of the screen
                                    }}
                                >
                                    <FlexRow className='w-full items-center justify-between'>
                                        <Div className='w-1/5'>
                                            <Div
                                                className='w-12 h-12 laptop:w-16 laptop:h-16 desktop:w-20 desktop:h-20 mx-auto'
                                                style={{
                                                    backgroundImage: `url(${Images.vontos})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }} />
                                        </Div>
                                        <Div className='w-4/5 p-4'>
                                            <Text className='text-secondary-200 font-semibold'>
                                                Vontos Technologies
                                            </Text>
                                            <Text className='text-secondary-200 text-xs'>
                                                Since July 2023
                                            </Text> 
                                            <Spacer className='w-4 h-4' />
                                            <Text className='text-secondary-200'>
                                                &#8226; Consultations with web and mobile developers aid in achieving the projects digital objectives.
                                            </Text>
                                            <Text className='text-secondary-200'>
                                                &#8226; Work independently or as part of a team, able to provide low-level technical documentations
                                            </Text>
                                        </Div>
                                    </FlexRow>
                                </motion.div>
                            </Div>
                            : <ImSpinner className="animate-spin my-16 text-grey-400 text-4xl text-center mx-auto" />
                    }
                </InView>

                {/* //////////////////////// */}
                {/* Training Section         */}
                {/* //////////////////////// */}
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <div id='about-content-1' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Training and Seminars
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isTrainingVisible) {
                        setTimeout(() => {
                            setTraining(inView);
                        }, 750);
                    }
                }}>
                    {
                        isTrainingVisible
                            ? <Div className='py-4 laptopSm:py-8 laptop:py-12 rounded-md shadow-lg bg-white'>
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
                                        <Div className='w-1/5'>
                                            <Div
                                                className='w-12 h-12 laptop:w-16 laptop:h-16 desktop:w-20 desktop:h-20 mx-auto'
                                                style={{
                                                    backgroundImage: `url(${Images.zuittLogo})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }} />
                                        </Div>
                                        <Div className='w-4/5 p-4'>
                                            <Text className='text-secondary-200'>
                                                &#8226; Front-End Web Development with HTML5, CSS3, BootStrap 4 (March 2022)
                                            </Text>
                                            <Text className='text-secondary-200'>
                                                &#8226; Back-End Web Development with JavaScript, MongoDb, Express.js, Node.js, PostMan, NoSQL (March 2022)
                                            </Text>
                                            <Text className='text-secondary-200'>
                                                &#8226; Full Stack Web Development with MERN tech Stack (April 2022)
                                            </Text>
                                            <Text className='text-secondary-200'>
                                                &#8226; Basic MySQL, PHP, Laravel (July 2022)
                                            </Text>
                                            <Text className='text-secondary-200'>
                                                &#8226; Basic MySQL, C#, ASP.NET Core MVC Framework (September 2023)
                                            </Text>
                                        </Div>
                                    </FlexRow>
                                </motion.div>
                                <Spacer className='w-4 h-4 laptop:h-6 desktop:h-8' />
                                <motion.div
                                    animate={{
                                        opacity: 1,
                                        y: 0, // Reset the y position to avoid jumping
                                    }}
                                    transition={{
                                        delay: 1.25,
                                        duration: 0.5,
                                        ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                    }}
                                    initial={{
                                        opacity: 0,
                                        y: +50, // Start the element off the top of the screen
                                    }}
                                >
                                    <FlexRow className='w-full items-center justify-between'>
                                        <Div className='w-1/5'>
                                            <Div
                                                className='w-12 h-12 laptop:w-16 laptop:h-16 desktop:w-20 desktop:h-20 mx-auto'
                                                style={{
                                                    backgroundImage: `url(${Icons.apple})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }} />
                                        </Div>
                                        <Div className='w-4/5 p-4'>
                                            <Text className='text-secondary-200'>
                                                &#8226; XCode Setup and Build
                                            </Text>
                                            <Text className='text-secondary-200'>
                                                &#8226; App Store Connect TestFlight
                                            </Text>
                                            <Text className='text-secondary-200'>
                                                &#8226; December 2023
                                            </Text>
                                        </Div>
                                    </FlexRow>
                                </motion.div>
                            </Div>
                            : <ImSpinner className="animate-spin my-16 text-grey-400 text-4xl text-center mx-auto" />
                    }
                </InView>

                {/* //////////////////////// */}
                {/* Academic Section         */}
                {/* //////////////////////// */}
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <div id='about-content-1' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Studies and Academics
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isAcademicVisible) {
                        setTimeout(() => {
                            setAcademic(inView);
                        }, 750);
                    }
                }}>
                    {
                        isAcademicVisible
                            ? <Div className='py-4 laptopSm:py-8 laptop:py-12 rounded-md shadow-lg bg-white'>
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
                                        <Div className='w-1/5'>
                                            <Div
                                                className='w-12 h-12 laptop:w-16 laptop:h-16 desktop:w-20 desktop:h-20 mx-auto'
                                                style={{
                                                    backgroundImage: `url(${Icons.tip})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }} />
                                        </Div>
                                        <Div className='w-4/5 p-4'>
                                            <Text className='text-secondary-200'>
                                                &#8226; BS Civil Engineering
                                            </Text>
                                            <Text className='text-secondary-200'>
                                                &#8226; Deans Lister
                                            </Text>
                                            <Text className='text-secondary-200'>
                                                &#8226; 2013 - 2019
                                            </Text>
                                        </Div>
                                    </FlexRow>
                                </motion.div>
                                <Spacer className='w-4 h-4 laptop:h-6 desktop:h-8 hidden' />
                                <motion.div
                                    animate={{
                                        opacity: 1,
                                        y: 0, // Reset the y position to avoid jumping
                                    }}
                                    transition={{
                                        delay: 1.25,
                                        duration: 0.5,
                                        ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                    }}
                                    initial={{
                                        opacity: 0,
                                        y: +50, // Start the element off the top of the screen
                                    }}
                                >
                                    <FlexRow className='w-full items-center justify-between hidden'>
                                        <Div className='w-1/5'>
                                            <Div
                                                className='w-12 h-12 laptop:w-16 laptop:h-16 desktop:w-20 desktop:h-20 mx-auto'
                                                style={{
                                                    backgroundImage: `url(${Icons.apple})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }} />
                                        </Div>
                                        <Div className='w-4/5 p-4'>
                                            <Text className='text-secondary-200'>
                                                &#8226; XCode Setup and Build
                                            </Text>
                                            <Text className='text-secondary-200'>
                                                &#8226; App Store Connect TestFlight
                                            </Text>
                                            <Text className='text-secondary-200'>
                                                &#8226; December 2023
                                            </Text>
                                        </Div>
                                    </FlexRow>
                                </motion.div>
                            </Div>
                            : <ImSpinner className="animate-spin my-16 text-grey-400 text-4xl text-center mx-auto" />
                    }
                </InView>

                <Spacer className='w-10 h-10' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
            </Div>
        </Div>
    );
};