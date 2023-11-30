import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BsCoin } from "react-icons/bs";
import { FaSearch, FaUser, FaHandPaper, FaLink } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { MdHome, MdCall, MdTravelExplore } from "react-icons/md";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import { Div, FlexRow, Spacer } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Text } from "@/components/core/TextElements";
import { RawInput } from '@/components/core/Forms/RawInput';
import { Images } from "@/constants/assets";
import { RouteNames } from '@/constants/constants';

export const SearchField: FC<any> = () => {
    return (
        <FlexRow className='w-full justify-between items-center'>
            <Div>
                <Text className='text-4xl font-bold'>
                    Charles C.
                </Text>
                <Text>
                    Full Stack Developer
                </Text>
            </Div>
            <Div className='relative w-300px'>
                <ButtonClassA className='absolute index-10 border border-purple-300 bg-purple-300 rounded-md px-4 py-2 right-0' onClick={() => { }}>
                    <FaSearch className="text-2xl" />
                </ButtonClassA>
                <RawInput className="border border-purple-300 rounded-md px-4 py-2" placeholder='Search' type="search" />
            </Div>
        </FlexRow>
    )
}

interface DataProps {
    location: string
    className?: string;
    children?: any;
    onClick?: any;
    props?: any;
}

export const Appbar: FC<DataProps> = ({ location, className, children, onClick, ...props }) => {
    const router = useRouter();
    return (
        <Div className='relative w-full'>
            <FlexRow className='fixed index-10 items-center justify-center w-full p-2 bg-dark-100'>
                <motion.div
                    animate={{
                        opacity: 1,
                        y: 0, // Reset the y position to avoid jumping
                    }}
                    transition={{
                        delay: location !== RouteNames.home ? 0 : 0.2,
                        duration: 0.5,
                        ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                    }}
                    initial={{
                        opacity: 0,
                        y: -50, // Start the element off the top of the screen
                    }}
                >
                    <ButtonClassA
                        className='mx-2 phone:px-0 w-32 bg-dark-100 text-white flex flex-row items-center justify-center'
                        onClick={() => {
                            if (onClick) {
                                onClick();
                            }
                            router.push('/home')
                        }}>
                        <MdHome className="text-xl mr-2" />
                        HOME
                    </ButtonClassA>
                </motion.div>
                <motion.div
                    animate={{
                        opacity: 1,
                        y: 0, // Reset the y position to avoid jumping
                    }}
                    transition={{
                        delay: location !== RouteNames.home ? 0 : 0.4,
                        duration: 0.5,
                        ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                    }}
                    initial={{
                        opacity: 0,
                        y: -50, // Start the element off the top of the screen
                    }}
                >
                    <ButtonClassA
                        className='mx-2 phone:px-0 w-32 bg-dark-100 text-white flex flex-row items-center justify-center'
                        onClick={() => {
                            if (onClick) {
                                onClick();
                            }
                            router.push('/about')
                        }}>
                        <FaUser className="mr-2" />
                        ABOUT
                    </ButtonClassA>
                </motion.div>
                <motion.div
                    animate={{
                        opacity: 1,
                        y: 0, // Reset the y position to avoid jumping
                    }}
                    transition={{
                        delay: location !== RouteNames.home ? 0 : 0.6,
                        duration: 0.5,
                        ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                    }}
                    initial={{
                        opacity: 0,
                        y: -50, // Start the element off the top of the screen
                    }}
                >
                    <ButtonClassA
                        className='mx-2 phone:px-0 w-32 bg-dark-100 text-white flex flex-row items-center justify-center'
                        onClick={() => {
                            if (onClick) {
                                onClick();
                            }
                            router.push('/works')
                        }}>
                        <GiCheckMark className="text-xl mr-2" />
                        WORKS
                    </ButtonClassA>
                </motion.div>
                <motion.div
                    animate={{
                        opacity: 1,
                        y: 0, // Reset the y position to avoid jumping
                    }}
                    transition={{
                        delay: location !== RouteNames.home ? 0 : 0.8,
                        duration: 0.5,
                        ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                    }}
                    initial={{
                        opacity: 0,
                        y: -50, // Start the element off the top of the screen
                    }}
                >
                    <ButtonClassA
                        className='mx-2 phone:px-0 w-32 bg-dark-100 text-white flex flex-row items-center justify-center'
                        onClick={() => {
                            if (onClick) {
                                onClick();
                            }
                            router.push('/contact')
                        }}>
                        <MdCall className="text-xl mr-2" />
                        CONTACT
                    </ButtonClassA>
                </motion.div>
                <Spacer className="w-48 h-4" />
                <motion.div
                    animate={{
                        opacity: 1,
                        y: 0, // Reset the y position to avoid jumping
                    }}
                    transition={{
                        delay: location !== RouteNames.home ? 0 : 1,
                        duration: 0.5,
                        ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                    }}
                    initial={{
                        opacity: 0,
                        y: -50, // Start the element off the top of the screen
                    }}
                >
                    <ButtonClassA
                        className='mx-2 phone:px-0 w-32 bg-dark-100 text-white flex flex-row items-center justify-center'
                        onClick={() => {
                            if (onClick) {
                                onClick();
                            }
                            router.push('/skills')
                        }}>
                        <FaHandPaper className="textxl mr-2" />
                        SKILLS
                    </ButtonClassA>
                </motion.div>
                <motion.div
                    animate={{
                        opacity: 1,
                        y: 0, // Reset the y position to avoid jumping
                    }}
                    transition={{
                        delay: location !== RouteNames.home ? 0 : 1.2,
                        duration: 0.5,
                        ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                    }}
                    initial={{
                        opacity: 0,
                        y: -50, // Start the element off the top of the screen
                    }}
                >
                    <ButtonClassA
                        className='mx-2 phone:px-0 w-32 bg-dark-100 text-white flex flex-row items-center justify-center'
                        onClick={() => {
                            if (onClick) {
                                onClick();
                            }
                            router.push('/services')
                        }}>
                        <BsCoin className="text-xl mr-2" />
                        SERVICES
                    </ButtonClassA>
                </motion.div>
                <motion.div
                    animate={{
                        opacity: 1,
                        y: 0, // Reset the y position to avoid jumping
                    }}
                    transition={{
                        delay: location !== RouteNames.home ? 0 : 1.4,
                        duration: 0.5,
                        ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                    }}
                    initial={{
                        opacity: 0,
                        y: -50, // Start the element off the top of the screen
                    }}
                >
                    <ButtonClassA
                        className='mx-2 phone:px-0 w-32 bg-dark-100 text-white flex flex-row items-center justify-center'
                        onClick={() => {
                            if (onClick) {
                                onClick();
                            }
                            router.push('/connect')
                        }}>
                        <FaLink className="text-xl mr-2" />
                        CONNECT
                    </ButtonClassA>
                </motion.div>
                <motion.div
                    animate={{
                        opacity: 1,
                        y: 0, // Reset the y position to avoid jumping
                    }}
                    transition={{
                        delay: location !== RouteNames.home ? 0 : 1.6,
                        duration: 0.5,
                        ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                    }}
                    initial={{
                        opacity: 0,
                        y: -50, // Start the element off the top of the screen
                    }}
                >
                    <ButtonClassA
                        className='mx-2 phone:px-0 w-32 bg-dark-100 text-white flex flex-row items-center justify-center'
                        onClick={() => {
                            if (onClick) {
                                onClick();
                            }
                            router.push('/explore')
                        }}>
                        <MdTravelExplore className="text-xl mr-2" />
                        EXPLORE
                    </ButtonClassA>
                </motion.div>
            </FlexRow>
            <FlexRow className='fixed index-20 justify-center items-center top-0 left-0 right-0 mx-auto w-48'>
                {
                    location === RouteNames.home
                        ? <motion.div
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 2
                            }}
                        >
                            <Image
                                src={Images.favicon}
                                alt="C Logo"
                                className='rounded-full border border-8 border-dark-100'
                                width={100}
                                height={100}
                            />
                        </motion.div>
                        : <Image
                            src={Images.favicon}
                            alt="C Logo"
                            className='rounded-full border border-8 border-dark-100'
                            width={100}
                            height={100}
                        />
                }
            </FlexRow>
        </Div>
    );
}

export const Appbar2: FC<DataProps> = ({ location, className, children, onClick, ...props }) => {
    const router = useRouter();
    return (
        <Div className='relative w-full'>
            <FlexRow className='fixed index-10 h-12 items-center justify-between w-full px-2 bg-white border-b border-grey-400'>
                <motion.div
                    animate={{
                        opacity: 1,
                        y: 0, // Reset the y position to avoid jumping
                    }}
                    transition={{
                        delay: location !== RouteNames.home ? 0 : 0.2,
                        duration: 0.5,
                        ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                    }}
                    initial={{
                        opacity: 0,
                        y: -50, // Start the element off the top of the screen
                    }}
                >
                    <ButtonClassA
                        className='phone:shadow-none phone:px-0 w-32 bg-white text-primary-100 flex flex-row items-center justify-center hover:bg-primary-100 hover:text-white h-12 border-b border-grey-400'
                        onClick={() => {
                            if (onClick) {
                                onClick();
                            }
                            router.push('/home')
                        }}>
                        <Image
                            src={Images.favicon}
                            alt="C Logo"
                            className='rounded-full'
                            width={36}
                            height={36}
                        />
                    </ButtonClassA>
                </motion.div>
                <FlexRow className='items-center'>
                    <motion.div
                        animate={{
                            opacity: 1,
                            y: 0, // Reset the y position to avoid jumping
                        }}
                        transition={{
                            delay: location !== RouteNames.home ? 0 : 0.2,
                            duration: 0.5,
                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                        }}
                        initial={{
                            opacity: 0,
                            y: -50, // Start the element off the top of the screen
                        }}
                    >
                        <ButtonClassA
                            className='phone:shadow-none phone:px-0 w-32 bg-white text-primary-100 flex flex-row items-center justify-center hover:bg-primary-100 hover:text-white h-12 border-b border-grey-400'
                            onClick={() => {
                                if (onClick) {
                                    onClick();
                                }
                                router.push('/home')
                            }}>
                            <MdHome className="text-xl mr-2 hidden" />
                            HOME
                        </ButtonClassA>
                    </motion.div>
                    <motion.div
                        animate={{
                            opacity: 1,
                            y: 0, // Reset the y position to avoid jumping
                        }}
                        transition={{
                            delay: location !== RouteNames.home ? 0 : 0.4,
                            duration: 0.5,
                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                        }}
                        initial={{
                            opacity: 0,
                            y: -50, // Start the element off the top of the screen
                        }}
                    >
                        <ButtonClassA
                            className='phone:shadow-none phone:px-0 w-32 bg-white text-primary-100 flex flex-row items-center justify-center hover:bg-primary-100 hover:text-white h-12 border-b border-grey-400'
                            onClick={() => {
                                if (onClick) {
                                    onClick();
                                }
                                router.push('/about')
                            }}>
                            <FaUser className="mr-2 hidden" />
                            ABOUT
                        </ButtonClassA>
                    </motion.div>
                    <motion.div
                        animate={{
                            opacity: 1,
                            y: 0, // Reset the y position to avoid jumping
                        }}
                        transition={{
                            delay: location !== RouteNames.home ? 0 : 0.6,
                            duration: 0.5,
                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                        }}
                        initial={{
                            opacity: 0,
                            y: -50, // Start the element off the top of the screen
                        }}
                    >
                        <ButtonClassA
                            className='phone:shadow-none phone:px-0 w-32 bg-white text-primary-100 flex flex-row items-center justify-center hover:bg-primary-100 hover:text-white h-12 border-b border-grey-400'
                            onClick={() => {
                                if (onClick) {
                                    onClick();
                                }
                                router.push('/works')
                            }}>
                            <GiCheckMark className="text-xl mr-2 hidden" />
                            WORKS
                        </ButtonClassA>
                    </motion.div>
                    <motion.div
                        animate={{
                            opacity: 1,
                            y: 0, // Reset the y position to avoid jumping
                        }}
                        transition={{
                            delay: location !== RouteNames.home ? 0 : 0.8,
                            duration: 0.5,
                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                        }}
                        initial={{
                            opacity: 0,
                            y: -50, // Start the element off the top of the screen
                        }}
                    >
                        <ButtonClassA
                            className='phone:shadow-none phone:px-0 w-32 bg-white text-primary-100 flex flex-row items-center justify-center hover:bg-primary-100 hover:text-white h-12 border-b border-grey-400'
                            onClick={() => {
                                if (onClick) {
                                    onClick();
                                }
                                router.push('/contact')
                            }}>
                            <MdCall className="text-xl mr-2 hidden" />
                            CONTACT
                        </ButtonClassA>
                    </motion.div>
                    <motion.div
                        animate={{
                            opacity: 1,
                            y: 0, // Reset the y position to avoid jumping
                        }}
                        transition={{
                            delay: location !== RouteNames.home ? 0 : 1,
                            duration: 0.5,
                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                        }}
                        initial={{
                            opacity: 0,
                            y: -50, // Start the element off the top of the screen
                        }}
                    >
                        <ButtonClassA
                            className='phone:shadow-none phone:px-0 w-32 bg-white text-primary-100 flex flex-row items-center justify-center hover:bg-primary-100 hover:text-white h-12 border-b border-grey-400'
                            onClick={() => {
                                if (onClick) {
                                    onClick();
                                }
                                router.push('/skills')
                            }}>
                            <FaHandPaper className="textxl mr-2 hidden" />
                            SKILLS
                        </ButtonClassA>
                    </motion.div>
                    <motion.div
                        animate={{
                            opacity: 1,
                            y: 0, // Reset the y position to avoid jumping
                        }}
                        transition={{
                            delay: location !== RouteNames.home ? 0 : 1.2,
                            duration: 0.5,
                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                        }}
                        initial={{
                            opacity: 0,
                            y: -50, // Start the element off the top of the screen
                        }}
                    >
                        <ButtonClassA
                            className='phone:shadow-none phone:px-0 w-32 bg-white text-primary-100 flex flex-row items-center justify-center hover:bg-primary-100 hover:text-white h-12 border-b border-grey-400'
                            onClick={() => {
                                if (onClick) {
                                    onClick();
                                }
                                router.push('/services')
                            }}>
                            <BsCoin className="text-xl mr-2 hidden" />
                            SERVICES
                        </ButtonClassA>
                    </motion.div>
                    <motion.div
                        animate={{
                            opacity: 1,
                            y: 0, // Reset the y position to avoid jumping
                        }}
                        transition={{
                            delay: location !== RouteNames.home ? 0 : 1.4,
                            duration: 0.5,
                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                        }}
                        initial={{
                            opacity: 0,
                            y: -50, // Start the element off the top of the screen
                        }}
                    >
                        <ButtonClassA
                            className='phone:shadow-none phone:px-0 w-32 bg-white text-primary-100 flex flex-row items-center justify-center hover:bg-primary-100 hover:text-white h-12 border-b border-grey-400'
                            onClick={() => {
                                if (onClick) {
                                    onClick();
                                }
                                router.push('/connect')
                            }}>
                            <FaLink className="text-xl mr-2 hidden" />
                            CONNECT
                        </ButtonClassA>
                    </motion.div>
                    <motion.div
                        animate={{
                            opacity: 1,
                            y: 0, // Reset the y position to avoid jumping
                        }}
                        transition={{
                            delay: location !== RouteNames.home ? 0 : 1.6,
                            duration: 0.5,
                            ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                        }}
                        initial={{
                            opacity: 0,
                            y: -50, // Start the element off the top of the screen
                        }}
                    >
                        <ButtonClassA
                            className='phone:shadow-none phone:px-0 w-32 bg-white text-primary-100 flex flex-row items-center justify-center hover:bg-primary-100 hover:text-white h-12 border-b border-grey-400'
                            onClick={() => {
                                if (onClick) {
                                    onClick();
                                }
                                router.push('/explore')
                            }}>
                            <MdTravelExplore className="text-xl mr-2 hidden" />
                            EXPLORE
                        </ButtonClassA>
                    </motion.div>
                </FlexRow>
            </FlexRow>
            <FlexRow className='fixed index-20 justify-center items-center top-0 left-0 right-0 mx-auto w-48 hidden'>
                {
                    location === RouteNames.home
                        ? <motion.div
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 2
                            }}
                        >
                            <Image
                                src={Images.favicon}
                                alt="C Logo"
                                className='rounded-full border border-8 border-dark-100'
                                width={100}
                                height={100}
                            />
                        </motion.div>
                        : <Image
                            src={Images.favicon}
                            alt="C Logo"
                            className='rounded-full border border-8 border-dark-100'
                            width={100}
                            height={100}
                        />
                }
            </FlexRow>
        </Div>
    );
}