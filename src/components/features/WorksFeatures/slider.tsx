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

export const WorksSlider: FC<any> = () => {
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
                    backgroundImage: `url(${Images.nextjs})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <FlexRow className='phone:w-full tablet:w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                Next.js Projects
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left phone:mx-auto tablet:mr-auto tablet:ml-0'>
                                Next.js is a popular choice for building fast, scalable, and SEO-friendly websites.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => {  
                                const element = document.getElementById('works-content-nextjs');
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
                    backgroundImage: `url(${Images.reactjs})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <FlexRow className='phone:w-full tablet:w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                React.js Projects
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left phone:mx-auto tablet:mr-auto tablet:ml-0'>
                                Websites built using ReactJS, a JavaScript library for building user interfaces. (Component-based development and virtual DOM efficiency)
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => {   
                                const element = document.getElementById('works-content-reactjs');
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
                    backgroundImage: `url(${Images.flutter})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <FlexRow className='phone:w-full tablet:w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                Flutter Projects
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left phone:mx-auto tablet:mr-auto tablet:ml-0'>
                                Flutter is a powerful framework for building cross-platform mobile and web apps.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => {   
                                const element = document.getElementById('works-content-flutter');
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
                    backgroundImage: `url(${Images.nodejs})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <FlexRow className='phone:w-full tablet:w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                Node.js Projects
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left phone:mx-auto tablet:mr-auto tablet:ml-0'>
                                Backend projects showcasing the power and versatility of Node.js, a JavaScript runtime environment ideal for building efficient and scalable backend applications.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => {   
                                const element = document.getElementById('works-content-nodejs');
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
                    backgroundImage: `url(${Images.aspnet})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                }}>
                    <FlexRow className='phone:w-full tablet:w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                ASP.NET Core MVC
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left phone:mx-auto tablet:mr-auto tablet:ml-0'>
                                NET Core is one of the most popular and loved web-development frameworks to build web apps. It is a cross-platform open-source project with excellent technical assistance.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => {   
                                const element = document.getElementById('works-content-asp');
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
                    backgroundImage: `url(${Images.angular})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                }}>
                    <FlexRow className='phone:w-full tablet:w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                Angular.js
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left phone:mx-auto tablet:mr-auto tablet:ml-0'>
                                AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => {   
                                const element = document.getElementById('works-content-angular');
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
                    backgroundImage: `url(${Images.native})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <FlexRow className='phone:w-full tablet:w-4/5 h-full bg-gradient-to-r from-fullBlack justify-start items-center'>
                        <Spacer className='phone:hidden tablet:block w-20 h-20' />
                        <Div className="phone:w-full tablet:w-auto">
                            <Text className='font-bold text-white text-xl phone:text-center tablet:text-left'>
                                HTML5, CSS3, Vanilla Javascript Projects
                            </Text>
                            <Text className='w-300px text-white py-4 phone:text-center tablet:text-left phone:mx-auto tablet:mr-auto tablet:ml-0'>
                                This trio provides a robust foundation for building modern and interactive web experiences.
                            </Text>
                            <ButtonClassA className="border border-2 border-white phone:bg-transparent hover:bg-white text-white hover:text-dark-100 phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => {   
                                const element = document.getElementById('works-content-html');
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
