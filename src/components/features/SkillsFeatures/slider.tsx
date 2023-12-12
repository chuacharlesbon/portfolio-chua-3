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

export const SkillsSlider: FC<any> = () => {
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
                    backgroundImage: `url(${Images.development})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <FlexRow className='w-4/5 h-full bg-gradient-to-r from-primary-100 justify-start items-center'>
                        <Spacer className='w-20 h-20' />
                        <Div>
                            <Text className='font-bold text-white text-xl'>
                                Development Tools and Coding Skills
                            </Text>
                            <Text className='w-300px text-white py-4'>
                                Throughout my journey, I<Span>&#39;</Span>ve actively pursued opportunities to hone my skills, explore diverse languages and frameworks, and build a strong foundation in software development.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-primary-100 phone:py-2 phone:px-4 my-8" onClick={() => { }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.technical})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <FlexRow className='w-4/5 h-full bg-gradient-to-r from-primary-100 justify-start items-center'>
                        <Spacer className='w-20 h-20' />
                        <Div>
                            <Text className='font-bold text-white text-xl'>
                                Technical and Academic Skills
                            </Text>
                            <Text className='w-300px text-white py-4'>
                                My academic background in engineering has equipped me with a solid foundation in arithmetic, algorithm and logic, while my technical skills allow me to translate these concepts into real-world solutions.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-primary-100 phone:py-2 phone:px-4 my-8" onClick={() => { }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.otherSkills})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <FlexRow className='w-4/5 h-full bg-gradient-to-r from-primary-100 justify-start items-center'>
                        <Spacer className='w-20 h-20' />
                        <Div>
                            <Text className='font-bold text-white text-xl'>
                                Other Relevant Skills
                            </Text>
                            <Text className='w-300px text-white py-4'>
                                Diverse range of non-technical skills that complement my technical expertise, making me a valuable asset in any team environment.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-primary-100 phone:py-2 phone:px-4 my-8" onClick={() => { }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
            </Carousel>
        </Div>
    );
};