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
import { Text, Span } from "@/components/core/TextElements";
import { RawInput } from '@/components/core/Forms/RawInput';
import { Images } from "@/constants/assets";
import { useWindowSize } from '@/hooks/useWindowSize';

export const AboutSlider: FC<any> = () => {
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
                    backgroundImage: `url(${Images.xtendly2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                }}>
                    <FlexRow className='phone:w-full tablet:w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                Marketplace and Corporate
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left'>
                                Throughout my career, I<Span>&#39;</Span>ve had the privilege of working in a variety of roles and industries, gaining valuable experience and expanding my skillset.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => {
                                const element = document.getElementById('about-content-work');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.zuitt2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                }}>
                    <FlexRow className='phone:w-full tablet:w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                Trainings and Seminars
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left'>
                                Throughout my professional journey, I<Span>&#39;</Span>ve always placed a strong emphasis on continuous learning and professional development.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => {
                                const element = document.getElementById('about-content-training');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.college})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                }}>
                    <FlexRow className='phone:w-full tablet:w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                Studies and Academics
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left'>
                                My journey towards professional expertise began with a solid academic foundation which equipped me with a strong theoretical foundation in different aspects.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => {
                                const element = document.getElementById('about-content-academic');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.journey2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                }}>
                    <FlexRow className='phone:w-full tablet:w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                Journey and Industry
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left'>
                                My journey in the industry has been a thrilling adventure of learning, growth, and achievement, actively pursued opportunities to develop my skills, expand my knowledge, and take on increasing responsibilities.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => { 
                                const element = document.getElementById('about-content-others');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
            </Carousel>
        </Div>
    );
};