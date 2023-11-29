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
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            >
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left',
                }}>
                    <FlexRow className='w-4/5 h-full bg-gradient-to-r from-white justify-start items-center'>
                        <Spacer className='w-20 h-20' />
                        <Div>
                            <Text className='font-bold text-primary-100 text-xl'>
                                About Me
                            </Text>
                            <ButtonClassA className="border border-2 border-primary-100 phone:bg-transparent hover:bg-primary-100 text-primary-100 hover:text-white phone:py-2 phone:px-4 my-8" onClick={() => { }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left',
                }}>
                    <FlexRow className='w-4/5 h-full bg-gradient-to-r from-white justify-start items-center'>
                        <Spacer className='w-20 h-20' />
                        <Div>
                            <Text className='font-bold text-primary-100 text-xl'>
                                About Me
                            </Text>
                            <ButtonClassA className="border border-2 border-primary-100 phone:bg-transparent hover:bg-primary-100 text-primary-100 hover:text-white phone:py-2 phone:px-4 my-8" onClick={() => { }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left',
                }}>
                    <FlexRow className='w-4/5 h-full bg-gradient-to-r from-white justify-start items-center'>
                        <Spacer className='w-20 h-20' />
                        <Div>
                            <Text className='font-bold text-primary-100 text-xl'>
                                About Me
                            </Text>
                            <ButtonClassA className="border border-2 border-primary-100 phone:bg-transparent hover:bg-primary-100 text-primary-100 hover:text-white phone:py-2 phone:px-4 my-8" onClick={() => { }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
                <Div className='w-full h-500px' style={{
                    backgroundImage: `url(${Images.cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left',
                }}>
                    <FlexRow className='w-4/5 h-full bg-gradient-to-r from-white justify-start items-center'>
                        <Spacer className='w-20 h-20' />
                        <Div>
                            <Text className='font-bold text-primary-100 text-xl'>
                                About Me
                            </Text>
                            <ButtonClassA className="border border-2 border-primary-100 phone:bg-transparent hover:bg-primary-100 text-primary-100 hover:text-white phone:py-2 phone:px-4 my-8" onClick={() => { }}>
                                LEARN MORE
                            </ButtonClassA>
                        </Div>
                    </FlexRow>
                </Div>
            </Carousel>
        </Div>
    );
};