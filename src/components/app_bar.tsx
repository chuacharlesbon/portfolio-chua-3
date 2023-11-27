import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BsCoin } from "react-icons/bs";
import { FaSearch, FaUser, FaHandPaper, FaLink } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { MdHome, MdCall, MdTravelExplore } from "react-icons/md";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Div, FlexRow, Spacer } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Text } from "@/components/core/TextElements";
import { RawInput } from '@/components/core/Forms/RawInput';
import { Images } from "@/constants/assets";

const AppBarSlider: FC<any> = () => {
    const responsive = {
        mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    };
    return (
        <Div className='w-200px hidden'>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            >
                <FlexRow className='justify-center w-full h-12 border border-grey-400'>
                    <Image
                        src={Images.okada}
                        alt="C Logo"
                        className='object-contain'
                        width={200}
                        height={50}
                    />
                </FlexRow>
                <FlexRow className='justify-center w-full h-12 bg-primary-100'>
                    <Image
                        src={Images.cebuana}
                        alt="C Logo"
                        className='object-contain'
                        width={200}
                        height={50}
                    />
                </FlexRow>
                <FlexRow className='justify-center w-full h-12 border border-grey-400'>
                    <Image
                        src={Images.xffiliate}
                        alt="C Logo"
                        className='object-contain'
                        width={200}
                        height={50}
                    />
                </FlexRow>
                <FlexRow className='justify-center w-full h-12 border border-grey-400'>
                    <Image
                        src={Images.gpa}
                        alt="C Logo"
                        className='object-contain'
                        width={200}
                        height={50}
                    />
                </FlexRow>
            </Carousel>
        </Div>
    );
};

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
                        delay: 0.2,
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
                            if(onClick){
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
                        delay: 0.4,
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
                        if(onClick){
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
                        delay: 0.6,
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
                        if(onClick){
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
                        delay: 0.8,
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
                        if(onClick){
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
                        delay: 1,
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
                        if(onClick){
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
                        delay: 1.2,
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
                        if(onClick){
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
                        delay: 1.4,
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
                        if(onClick){
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
                        delay: 1.6,
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
                        if(onClick){
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
                <motion.div
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
            </FlexRow>
        </Div>
    );
}