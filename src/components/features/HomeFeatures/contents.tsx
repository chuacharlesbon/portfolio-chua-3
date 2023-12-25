'use client'
import React, { FC } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import { Div, FlexColumn, FlexRow, Spacer, TextDivider } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Text } from "@/components/core/TextElements";
import { Icons, Images } from "@/constants/assets";
import { RawInput } from '@/components/core/Forms/RawInput';
import { FormLabel } from '@/components/core/Forms/FormLabel';
import { ImSpinner } from 'react-icons/im';

export const HomeContents: FC<any> = () => {

    const [myState, setState] = React.useState('');
    const [isXtendlyVisible, setXtendly] = React.useState(false);
    const [isVontosVisible, setVontos] = React.useState(false);
    const [isZuittVisible, setZuitt] = React.useState(false);
    const [isNewsVisible, setNews] = React.useState(false);

    return (
        <Div className='w-full bg-grey-600'>
            <Div className='w-10/12 mx-auto p-4'>
                <div id='home-content-1' />

                {/* /////////////////////// */}
                {/* Work Section 1          */}
                {/* /////////////////////// */}
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Full Stack Developer | Xtendly
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isXtendlyVisible) {
                        setTimeout(() => {
                            setXtendly(inView);
                        }, 750);
                    }
                }}>
                    {
                        isXtendlyVisible
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
                                    <FlexRow className='w-full items-center justify-center laptop:text-lg desktop:text-xl'>
                                        <Div className='w-3/5 p-4'>
                                            <Text className='text-secondary-200'>
                                                More than a year of experience in web and mobile development working with ecommerce,
                                                admin systems, marketing sites, and affiliate web apps
                                            </Text>
                                            <Spacer className='w-2 h-2' />
                                            <Text className='text-secondary-200 laptop:text-lg desktop:text-xl'>
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
                                    <Spacer className='w-4 h-4 laptop:h-6 desktop:h-8' />
                                    <Text className='text-blue-100 text-center font-semibold'>
                                        Tools, Skills and Tech Stack
                                    </Text>
                                    <Spacer className='w-4 h-4' />
                                    <Div className='mx-auto text-center grid grid-cols-2 tablet:w-1/2 tablet:grid-cols-4 laptop:w-3/4 laptop:grid-cols-8 gap-4 items-center justify-center'>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.flutter}
                                                alt="Flutter"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Flutter
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.bootstrap}
                                                alt="Bootstrap"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Bootstrap
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.react}
                                                alt="Reactjs"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                React.js
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.tailwind}
                                                alt="Tailwind"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Tailwind
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.firebase}
                                                alt="Firebase"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Firebase
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.gcp}
                                                alt="Google Cloud"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                GCP
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.appstore}
                                                alt="App Store"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                App Store
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.restapi}
                                                alt="Rest API"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Rest API
                                            </Text>
                                        </FlexColumn>
                                    </Div>
                                </motion.div>
                            </Div>
                            : <ImSpinner className="animate-spin my-16 text-grey-400 text-4xl text-center mx-auto" />
                    }
                </InView>

                {/* /////////////////////// */}
                {/* Work Section 1          */}
                {/* /////////////////////// */}
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Development Consultant | Vontos
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isVontosVisible) {
                        setTimeout(() => {
                            setVontos(inView);
                        }, 750);
                    }
                }}>
                    {
                        isVontosVisible
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
                                    <FlexRow className='w-full items-center justify-center'>
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
                                            <Text className='text-secondary-200 laptop:text-lg desktop:text-xl'>
                                                Consultations with web and mobile developers aid in achieving the projects digital objectives.

                                            </Text>
                                            <Spacer className='w-2 h-2' />
                                            <Text className='text-secondary-200 laptop:text-lg desktop:text-xl'>
                                                Work independently or as part of a team, able to provide low-level technical documentations
                                            </Text>
                                        </Div>
                                    </FlexRow>
                                </motion.div>

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
                                    <Spacer className='w-4 h-4 laptop:h-6 desktop:h-8' />
                                    <Text className='text-blue-100 text-center font-semibold'>
                                        Tools, Skills and Tech Stack
                                    </Text>
                                    <Spacer className='w-4 h-4' />
                                    <Div className='mx-auto text-center grid grid-cols-2 tablet:w-1/2 tablet:grid-cols-4 laptop:w-3/5 gap-4 items-center justify-center'>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.next}
                                                alt="Next.js"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Next.js
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.flutter}
                                                alt="Flutter"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Flutter
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.node}
                                                alt="Node.js"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Node.js
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.javascript}
                                                alt="Javascript"
                                                className='mx-auto text-center rounded-md'
                                                width={36}
                                                height={36}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Javascript
                                            </Text>
                                        </FlexColumn>
                                    </Div>
                                </motion.div>
                            </Div>
                            : <ImSpinner className="animate-spin my-16 text-grey-400 text-4xl text-center mx-auto" />
                    }
                </InView>

                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Trainings and Seminars | Zuitt
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isZuittVisible) {
                        setTimeout(() => {
                            setZuitt(inView);
                        }, 750);
                    }
                }}>
                    {
                        isZuittVisible
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
                                    <FlexRow className='w-full items-center justify-center laptop:text-lg desktop:text-xl'>
                                        <Div className='w-3/5 p-4'>
                                            <Text className='text-secondary-200'>
                                                Front-End Web Development with HTML5, CSS3, BootStrap 4 (March 2022)
                                            </Text>
                                            <Spacer className='w-2 h-2' />
                                            <Text className='text-secondary-200 laptop:text-lg desktop:text-xl'>
                                                Back-End Web Development with JavaScript, MongoDb, Express.js, Node.js,
                                                PostMan, NoSQL (March 2022)
                                            </Text>
                                            <Spacer className='w-2 h-2' />
                                            <Text className='text-secondary-200 laptop:text-lg desktop:text-xl'>
                                                Full Stack Web Development with MERN tech Stack (April 2022)

                                            </Text>
                                        </Div>
                                        <Div className='w-1/4'>
                                            <Div
                                                className='h-40 w-40 mx-auto'
                                                style={{
                                                    backgroundImage: `url(${Images.zuittLogo})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }} />
                                        </Div>
                                    </FlexRow>
                                </motion.div>

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
                                    <Spacer className='w-4 h-4 laptop:h-6 desktop:h-8' />
                                    <Text className='text-blue-100 text-center font-semibold'>
                                        Tools, Skills and Tech Stack
                                    </Text>
                                    <Spacer className='w-4 h-4' />
                                    <Div className='mx-auto text-center grid grid-cols-2 tablet:w-1/2 tablet:grid-cols-4 laptop:w-3/4 laptop:grid-cols-8 gap-4 items-center justify-center'>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.git}
                                                alt="Git"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Git
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.html}
                                                alt="HTML5"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                HTML5
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.css}
                                                alt="CSS3"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                CSS3
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.mongodb}
                                                alt="MongoDB"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                MongoDB
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.sublime}
                                                alt="Sublime Text 3"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Sublime Text 3
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.node}
                                                alt="Node.js"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Node.js
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.bootstrap}
                                                alt="Bootstrap"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Bootstrap
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.restapi}
                                                alt="Rest API"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Rest API
                                            </Text>
                                        </FlexColumn>
                                    </Div>
                                </motion.div>
                            </Div>
                            : <ImSpinner className="animate-spin my-16 text-grey-400 text-4xl text-center mx-auto" />
                    }
                </InView>

                {/* /////////////////////// */}
                {/* News Section            */}
                {/* /////////////////////// */}
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl font-semibold">
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
                                    <FlexRow className='w-full items-stretch hover:items-start justify-between'>
                                        <Div className='duration-700 p-6 w-30p aspect-[3/2] rounded-lg shadow-md bg-white hover:shadow-lg hover:p-4'>
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
                                                <Text className='text-dark-100 font-bold'>
                                                    Timberland Bike Park App now on App Store & Google Play
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptop:text-sm font-light'>
                                                    December 2023
                                                </Text>
                                            </Div>
                                        </Div>
                                        <Div className='duration-700 p-6 w-30p aspect-[3/2] rounded-lg shadow-md bg-white hover:shadow-lg hover:p-4'>
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
                                                <Text className='text-dark-100 font-bold'>
                                                    Cebuana Lhuillier released their new website
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptop:text-sm font-light'>
                                                    November 2023
                                                </Text>
                                            </Div>
                                        </Div>
                                        <Div className='duration-700 p-6 w-30p aspect-[3/2] rounded-lg shadow-md bg-white hover:shadow-lg hover:p-4'>
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
                                                <Text className='text-dark-100 font-bold'>
                                                    Try Affiliate Marketing seamlessly with Xffiliate!
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptop:text-sm font-light'>
                                                    October 2022
                                                </Text>
                                            </Div>
                                        </Div>
                                    </FlexRow>
                                </motion.div>
                            </>
                            : <ImSpinner className="animate-spin my-16 text-blue-100 text-center font-semibold text-4xl text-center mx-auto" />
                    }
                </InView>
                <Spacer className='w-10 h-10' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
            </Div>
        </Div>
    );
};