import React, { FC } from 'react';
import Image from 'next/image';
import { Div, FlexColumn, FlexRow, Spacer, TextDivider } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Span, Text } from "@/components/core/TextElements";
import { Icons, Images } from "@/constants/assets";
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { GoDotFill } from "react-icons/go";
import { ImSpinner } from 'react-icons/im';

export const WorksContents: FC<any> = () => {

    const [isNextjsVisible, setNextjs] = React.useState(false);
    const [isReactjsVisible, setReactjs] = React.useState(false);
    const [isFlutterVisible, setFlutter] = React.useState(false);
    const [isNodejsVisible, setNodejs] = React.useState(false);
    const [isHTMLVisible, setHTML] = React.useState(false);

    return (
        <Div className='w-full bg-grey-600'>
            <Div className='w-10/12 mx-auto p-4'>
                {/* //////////////////////// */}
                {/* Nextjs Section           */}
                {/* //////////////////////// */}
                <div id='works-content-nextjs' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Next.js Projects
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isNextjsVisible) {
                        setTimeout(() => {
                            setNextjs(inView);
                        }, 750);
                    }
                }}>
                    {
                        isNextjsVisible
                            ? <Div className='py-4'>
                                <Div className='w-full mx-auto grid grid-cols-1 tablet:grid-cols-2 gap-4 tabletWide:gap-8 items-center justify-center'>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.25,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksNextjs})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Developer Portfolio
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    December 2023
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-blueGreen-100" />LIVE
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.50,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksFileshare})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    File Share
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    September 2023
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-yellow-100" />Sample Project
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                </Div>
                            </Div>
                            : <ImSpinner className="animate-spin my-16 text-grey-400 text-4xl text-center mx-auto" />
                    }
                </InView>

                {/* //////////////////////// */}
                {/* Reactjs Section           */}
                {/* //////////////////////// */}
                <div id='works-content-reactjs' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    React.js Projects
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isReactjsVisible) {
                        setTimeout(() => {
                            setReactjs(true);
                        }, 750);
                    }
                }}>
                    {
                        isReactjsVisible
                            ? <Div className='py-4'>
                                <Div className='w-full mx-auto grid grid-cols-1 tablet:grid-cols-2 gap-4 tabletWide:gap-8 items-center justify-center'>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.25,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksXfil})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Xffiliate
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    October 2022
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-blueGreen-100" />LIVE
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.25,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksGPA})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Guam Power Authority
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    2022
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-blueGreen-100" />LIVE
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.25,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksEcommerce})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    ECommerce Web App
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    April 2022
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-yellow-100" />Sample Project
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.50,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksReal})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Real Estate Web App
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    May 2022
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-yellow-100" />Sample Project
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                </Div>
                            </Div>
                            : <ImSpinner className="animate-spin my-16 text-grey-400 text-4xl text-center mx-auto" />
                    }
                </InView>

                {/* //////////////////////// */}
                {/* Flutter Section          */}
                {/* //////////////////////// */}
                <div id='works-content-flutter' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Flutter Projects
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isFlutterVisible) {
                        setTimeout(() => {
                            setFlutter(inView);
                        }, 750);
                    }
                }}>
                    {
                        isFlutterVisible
                            ? <Div className='py-4'>
                                <Div className='w-full mx-auto grid grid-cols-1 tablet:grid-cols-2 gap-4 tabletWide:gap-8 items-center justify-center'>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.25,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksCebuana})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Cebuana Lhuillier
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    November 2023
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-blueGreen-100" />LIVE
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.25,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.tmbpCover})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Timberland Bike Park
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    December 2023
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-blueGreen-100" />LIVE
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.25,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksAlajeras})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Alajeras
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    December 2023
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-blueGreen-100" />LIVE
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.50,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.okadaCover})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Okada App
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    2024
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-blueGreen-100" />LIVE
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.50,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksCaptive})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Captive Portal
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    October 2023
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-yellow-100" />Prototype
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                </Div>
                            </Div>
                            : <ImSpinner className="animate-spin my-16 text-grey-400 text-4xl text-center mx-auto" />
                    }
                </InView>

                {/* //////////////////////// */}
                {/* Nodejs Section           */}
                {/* //////////////////////// */}
                <div id='works-content-nodejs' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Node.js Projects
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isNodejsVisible) {
                        setTimeout(() => {
                            setNodejs(inView);
                        }, 750);
                    }
                }}>
                    {
                        isNodejsVisible
                            ? <Div className='py-4'>
                                <Div className='w-full mx-auto grid grid-cols-1 tablet:grid-cols-2 gap-4 tabletWide:gap-8 items-center justify-center'>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.25,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.nodejs})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Captive Portal CMS
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    October 2023
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-yellow-100" />Prototype
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.25,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.nodejs})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    ECommerce
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    April 2022
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-yellow-100" />Sample Project
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.25,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.nodejs})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Real Estate CMS
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    April 2022
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-yellow-100" />Sample Project
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.50,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.nodejs})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Coming Soon
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    2024
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-yellow-100" />Prototype
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                </Div>
                            </Div>
                            : <ImSpinner className="animate-spin my-16 text-grey-400 text-4xl text-center mx-auto" />
                    }
                </InView>

                {/* //////////////////////// */}
                {/* HTML5 Section           */}
                {/* //////////////////////// */}
                <div id='works-content-html' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    HTML5/CSS/Javascript Projects
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isHTMLVisible) {
                        setTimeout(() => {
                            setHTML(inView);
                        }, 750);
                    }
                }}>
                    {
                        isHTMLVisible
                            ? <Div className='py-4'>
                                <Div className='w-full mx-auto grid grid-cols-1 tablet:grid-cols-2 gap-4 tabletWide:gap-8 items-center justify-center'>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.25,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksPortfolio1})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Developer Portfolio v1
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    March 2022
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-yellow-100" />Sample Project
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            opacity: 1,
                                            y: 0, // Reset the y position to avoid jumping
                                        }}
                                        transition={{
                                            delay: 0.50,
                                            duration: 0.5,
                                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: +50, // Start the element off the top of the screen
                                        }}
                                    >
                                        <Div className='duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksOthers})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Other Websites
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light'>
                                                    2022
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-yellow-100" />Sample Project
                                                </Text>
                                            </Div>
                                        </Div>
                                    </motion.div>
                                </Div>
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
