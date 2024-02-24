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
import { projectsUrl } from '@/constants/constants';

export const WorksContents: FC<any> = () => {

    const [isNextjsVisible, setNextjs] = React.useState(false);
    const [isReactjsVisible, setReactjs] = React.useState(false);
    const [isFlutterVisible, setFlutter] = React.useState(false);
    const [isNodejsVisible, setNodejs] = React.useState(false);
    const [isASPVisible, setASP] = React.useState(false);
    const [isAngularjsVisible, setAngularjs] = React.useState(false);
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
                        }, 500);
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
                                        <a
                                            className='duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4 block'
                                            href={projectsUrl.portfolio2024}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
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
                                        </a>
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
                                        <a
                                            className='duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4 block'
                                            href={projectsUrl.fileShare}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
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
                                        </a>
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
                            setReactjs(inView);
                        }, 500);
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
                                                        backgroundImage: `url(${Images.privacy})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Temporary Hidden due to Privacy Data Policy Security
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    October 2022 (Corporate)
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
                                                        backgroundImage: `url(${Images.privacy})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Temporary Hidden due to Privacy Data Policy Security
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    2022 (Corporate)
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
                                        <a
                                            className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4 block'
                                            href={projectsUrl.shopNetwork}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
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
                                        </a>
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
                                        <a
                                            className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4 block'
                                            href={projectsUrl.rpg}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
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
                                        </a>
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
                        }, 500);
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
                                                        backgroundImage: `url(${Images.privacy})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Temporary Hidden due to Privacy Data Policy Security
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    November 2023 (Corporate)
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
                                                        backgroundImage: `url(${Images.privacy})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Temporary Hidden due to Privacy Data Policy Security
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    December 2023 (Corporate)
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
                                                        backgroundImage: `url(${Images.privacy})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Temporary Hidden due to Privacy Data Policy Security
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    December 2023 (Corporate)
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
                                                        backgroundImage: `url(${Images.privacy})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Temporary Hidden due to Privacy Data Policy Security
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    2024 (Corporate)
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
                                        <a
                                            className='mx-auto duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4 block'
                                            href={projectsUrl.captivePortal}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
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
                                        </a>
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
                        }, 500);
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
                {/* ASP.NET Section          */}
                {/* //////////////////////// */}
                <div id='works-content-asp' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    ASP.NET Core MVC Projects
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isASPVisible) {
                        setTimeout(() => {
                            setASP(inView);
                        }, 500);
                    }
                }}>
                    {
                        isASPVisible
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
                                        <a
                                            className='duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4 block'
                                            href={projectsUrl.cmtInst}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksAsp})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    CMT Learning Institute
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    January 2024
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-yellow-100" />Sample Project
                                                </Text>
                                            </Div>
                                        </a>
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
                                        <Div className='duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4 block'>
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksAsp2})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Admin Dashboard
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light'>
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
                {/* Angular Section          */}
                {/* //////////////////////// */}
                <div id='works-content-angular' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Angular.js Projects
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isAngularjsVisible) {
                        setTimeout(() => {
                            setAngularjs(inView);
                        }, 500);
                    }
                }}>
                    {
                        isAngularjsVisible
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
                                        <a
                                            className='duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4 block'
                                            href={projectsUrl.sceenry}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Images.worksAngular})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'left',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    SCENERY PH (Itinerary App)
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base  font-light'>
                                                    February 2024
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-yellow-100" />Sample Project (On-going)
                                                </Text>
                                            </Div>
                                        </a>
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
                                        <a
                                            className='duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4 block'
                                            href={projectsUrl.testAng}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Div className='w-full aspect-square tabletWide:aspect-[5/4]'>
                                                <Div
                                                    className='w-full aspect-[3/2] bg-grey-400 border border-grey-500'
                                                    style={{
                                                        backgroundImage: `url(${Icons.angular})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                </Div>
                                                <Spacer className='w-2 h-2 tabletWide:h-4 laptop:h-8' />
                                                <Text className='text-dark-100 font-bold laptopSm:text-lg desktop:text-xl'>
                                                    Test Project - Angular.js
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light'>
                                                    January 2024
                                                </Text>
                                                <Text className='text-dark-100 text-xs laptopSm:text-sm desktop:text-base font-light flex flex-row items-center'>
                                                    <GoDotFill className="mr-2 text-yellow-100" />Sample Project
                                                </Text>
                                            </Div>
                                        </a>
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
                        }, 500);
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
                                        <a
                                            className='duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4 block'
                                            href={projectsUrl.portfolio2022}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
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
                                        </a>
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
                                        <a
                                            className='duration-700 p-6 aspect-square tabletWide:aspect-[5/4] shadow-md bg-white hover:shadow-lg hover:p-4 block'
                                            href={projectsUrl.testApps}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
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
                                        </a>
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
