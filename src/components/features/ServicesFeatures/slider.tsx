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
import { Div, FlexColumn, FlexRow, Spacer } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Text } from "@/components/core/TextElements";
import { RawInput } from '@/components/core/Forms/RawInput';
import { Images } from "@/constants/assets";
import { useWindowSize } from '@/hooks/useWindowSize';

export const ServicesSlider: FC<any> = () => {
    const responsive = {
        mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    };
    const size = useWindowSize();
    return (
        <Div className='w-full'>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            >
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.formal5b})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                }}>
                    <FlexRow className='w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='w-20 h-20' />
                        <Div>
                            <Text className='font-bold text-white text-xl'>
                                Software Engineering Consultant
                            </Text>
                            <Text className='w-300px text-white py-4'>
                                Leveraging Expertise to Drive Your Success
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8" onClick={() => { }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.website2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <FlexRow className='w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='w-20 h-20' />
                        <Div>
                            <Text className='font-bold text-white text-xl'>
                                Web Apps & Websites
                            </Text>
                            <Text className='w-300px text-white py-4'>
                                We are a team of experienced web developers who are passionate about creating beautiful, functional, and results-driven websites. We have the skills and expertise to take your digital marketing to the next level.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8" onClick={() => { }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.desktopMobile})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <FlexRow className='w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='w-20 h-20' />
                        <Div>
                            <Text className='font-bold text-white text-xl'>
                                Mobile, Desktop Apps Development
                            </Text>
                            <Text className='w-300px text-white py-4'>
                                We create native applications that leverage the latest features and functionalities of each platform, ensuring a seamless and intuitive user experience. Developing robust and efficient desktop applications to streamline your workflows and boost productivity.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8" onClick={() => { }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.math})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <FlexRow className='w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='w-20 h-20' />
                        <Div>
                            <Text className='font-bold text-white text-xl'>
                                Math and Physics Tutorials
                            </Text>
                            <Text className='w-300px text-white py-4'>
                                Transform your learning experience.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8" onClick={() => { }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.market})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <FlexRow className='w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='w-20 h-20' />
                        <Div>
                            <Text className='font-bold text-white text-xl'>
                                Stock Market and Investments
                            </Text>
                            <Text className='w-300px text-white py-4'>
                                Explore risk management strategies to protect your capital and navigate market fluctuations. Craft portfolios aligned with your risk tolerance, time horizon, and financial aspirations.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8" onClick={() => { }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
            </Carousel>
        </Div>
    );
};