import React, { FC } from 'react';
import Image from 'next/image';
import { Div, FlexColumn, FlexRow, Spacer, TextDivider } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Span, Text } from "@/components/core/TextElements";
import { Icons, Images } from "@/constants/assets";
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ImSpinner } from 'react-icons/im';
import '../../../app/globals.css'

export const SkillsContents: FC<any> = () => {

    const [isCodingVisible, setCoding] = React.useState(false);
    const [isTechVisible, setTech] = React.useState(false);
    const [isOthersVisible, setOthers] = React.useState(false);

    return (
        <Div className='w-full bg-grey-600'>
            <Div className='w-10/12 mx-auto p-4'>

                {/* /////////////////////// */}
                {/* Coding Section          */}
                {/* /////////////////////// */}
                <div id='skills-content-coding' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Development Tools and Coding Skills
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isCodingVisible) {
                        setTimeout(() => {
                            setCoding(inView);
                        }, 500);
                    }
                }}>
                    {
                        isCodingVisible
                            ? <Div className='py-4 laptopSm:py-8 laptop:py-12 shadow-lg bg-white'>
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
                                    <Div className='mx-auto text-center grid grid-cols-2 tablet:w-1/2 tablet:grid-cols-4 laptopSm:w-3/5 laptopSm:grid-cols-6 laptop:w-3/4 laptop:grid-cols-8 gap-4 items-center justify-center'>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 2 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 2 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 2 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 1.8 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 1.9 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 1.9 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.react}
                                                alt="Reactjs"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                React Native
                                            </Text>
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 7 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "70%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 6 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "60%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 5 months</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 7.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "75%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 7.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "75%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 8 months</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 7 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "70%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 7 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "70%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 8 months</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 1.2 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.dart}
                                                alt="Dart"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Dart
                                            </Text>
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 1.2 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 7 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "70%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 7 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "70%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 8 months</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.xcode}
                                                alt="XCode"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                XCode
                                            </Text>
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 7.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "75%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 7.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "75%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 8 months</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.postman}
                                                alt="Postman"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Postman
                                            </Text>
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 1.9 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 1.9 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 1.9 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 2 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 2 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.vscode}
                                                alt="VS Code"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                VS Code
                                            </Text>
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "85%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 2 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.asp}
                                                alt="ASP.NET"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                ASP.NET
                                            </Text>
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 7 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "70%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 7 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "70%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 6 months</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.angular}
                                                alt="Angular.js"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Angular.js
                                            </Text>
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 5.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "55%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 5.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "55%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 1 month</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.shopify}
                                                alt="Shopify"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Shopify
                                            </Text>
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 7 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "70%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 7 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "70%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 1 month</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
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
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 8 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "80%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 8 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "80%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 6 months</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.wordpress}
                                                alt="WordPress"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                WordPress
                                            </Text>
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 6.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "65%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 6.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "65%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 1 month</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.php}
                                                alt="PHP"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                PHP
                                            </Text>
                                            <Div
                                                className='childTooltip z-50 w-450px h-300px px-28 py-20 top-1/2 mt-4 text-left flex flex-col justify-center items-start'
                                                style={{
                                                    backgroundImage: `url(${Images.bgScroll})`,
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <Text className="font-semibold text-brown-100 text-center text-xl mt-2 mb-4">
                                                    SKILL METRICS
                                                </Text>
                                                <Text className="font-semibold text-brown-100">
                                                    Proficiency: 6.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-blue rounded-full' style={{ width: "65%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Knowledge: 6.5 / 10
                                                </Text>
                                                <Div className='h-2 bg-grey-400 rounded-full w-full my-2'>
                                                    <Div className='h-2 background-play-green rounded-full' style={{ width: "65%" }} />
                                                </Div>
                                                <Text className="font-semibold text-brown-100">
                                                    Years of EXP: <Span className='font-normal'>+ 2 years</Span>
                                                </Text>
                                            </Div>
                                        </FlexColumn>
                                    </Div>
                                </motion.div>
                            </Div>
                            : <ImSpinner className="animate-spin my-16 text-grey-400 text-4xl text-center mx-auto" />
                    }
                </InView>

                {/* /////////////////////// */}
                {/* Technical Section       */}
                {/* /////////////////////// */}
                <div id='skills-content-tech' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Technical and Academic Skills
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isTechVisible) {
                        setTimeout(() => {
                            setTech(inView);
                        }, 500);
                    }
                }}>
                    {
                        isTechVisible
                            ? <Div className='py-10 shadow-lg bg-white'>
                                <Div className='w-full mx-auto grid grid-cols-1 tablet:grid-cols-2 laptop:w-10/12 laptopSm:grid-cols-3 gap-4 items-center justify-center'>
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
                                        <Div className='w-300px mx-auto p-4'>
                                            <Text className='text-dark-100'>
                                                &#8226; Semantic HTML
                                            </Text>
                                            <Text className='text-dark-100'>
                                                &#8226; Responsive Web Design
                                            </Text>
                                            <Text className='text-dark-100'>
                                                &#8226; Database Design
                                            </Text>
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
                                        <Div className='w-300px mx-auto p-4'>
                                            <Text className='text-dark-100'>
                                                &#8226; Git Version Control
                                            </Text>
                                            <Text className='text-dark-100'>
                                                &#8226; Attention to Detail
                                            </Text>
                                            <Text className='text-dark-100'>
                                                &#8226; Algorithm and Arithmetic
                                            </Text>
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
                                        <Div className='w-300px mx-auto p-4'>
                                            <Text className='text-dark-100'>
                                                &#8226; Critical & Logical thinking
                                            </Text>
                                            <Text className='text-dark-100'>
                                                &#8226; Problem Solving
                                            </Text>
                                            <Text className='text-dark-100'>
                                                &#8226; Time Management
                                            </Text>
                                        </Div>
                                    </motion.div>
                                </Div>
                            </Div>
                            : <ImSpinner className="animate-spin my-16 text-grey-400 text-4xl text-center mx-auto" />
                    }
                </InView>

                {/* /////////////////////// */}
                {/* Others Section          */}
                {/* /////////////////////// */}
                <div id='skills-content-others' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
                <Spacer className='w-10 h-10' />
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Other Relevant Skills
                </Text>
                <Spacer className='w-10 h-10' />
                <InView as="div" onChange={(inView, entry) => {
                    if (!isOthersVisible) {
                        setTimeout(() => {
                            setOthers(inView);
                        }, 500);
                    }
                }}>
                    {
                        isOthersVisible
                            ? <Div className='py-4 laptopSm:py-8 laptop:py-12 shadow-lg bg-white'>
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
                                    <Div className='mx-auto text-center grid grid-cols-2 tablet:w-1/2 tablet:grid-cols-3 laptopSm:w-3/5 laptopSm:grid-cols-6 gap-4 items-center justify-center'>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.windows}
                                                alt="Windows"
                                                className='mx-auto text-center'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Windows
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.apple}
                                                alt="Apple"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Mac
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.linux}
                                                alt="Linux"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Linux
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.figma}
                                                alt="Figma"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Figma
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.krita}
                                                alt="Krita"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                Krita
                                            </Text>
                                        </FlexColumn>
                                        <FlexColumn className='parentToolTip duration-700 w-20 h-20 aspect-square items-center justify-center hover:bg-blue-100 hover:bg-opacity-25 rounded-md mx-auto'>
                                            <Image
                                                src={Icons.sap}
                                                alt="SAP"
                                                className='mx-auto text-center rounded-md'
                                                width={50}
                                                height={50}
                                            />
                                            <Text className='text-secondary-200 text-xs laptop:text-sm font-light'>
                                                SAP
                                            </Text>
                                        </FlexColumn>
                                    </Div>
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