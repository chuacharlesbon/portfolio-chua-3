import React, { FC } from 'react';
import Image from 'next/image';
import { Div, FlexColumn, FlexRow, Spacer, TextDivider } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Text } from "@/components/core/TextElements";
import { Images } from "@/constants/assets";
import { useRouter } from 'next/router';
import { RedirectionURL, RouteNames } from '@/constants/constants';

export const ServicesContents: FC<any> = () => {

    const router = useRouter();

    return (
        <Div className='w-full bg-grey-600'>
            <Div className='phone:w-full tablet:w-10/12 mx-auto p-4'>

                <Spacer className='w-20 h-20 hidden laptop:block' />
                <div id='services-content-consult' />
                <Spacer className='w-10 h-10 laptop:h-20' />

                {/* /////////////////////////// */}
                {/* Consultant Section         */}
                {/* /////////////////////////// */}

                {/* <TextDivider
                    className='bg-grey-100'
                    textType='center'
                    textElement={
                        <Text className='w-1/3 text-3xl text-dark-100 text-center font-serif uppercase'>
                            Programming Consultant
                        </Text>
                    }
                /> */}
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Programming Consultant
                </Text>

                <Spacer className='w-12 h-12' />
                <FlexRow className='w-full items-center phone:flex-col tablet:flex-row phone:justify-start tablet:justify-around'>
                    <Div
                        className='phone:w-full tablet:w-1/3 aspect-[3/2] bg-grey-400 mb-8 tablet:mb-0'
                        style={{
                            backgroundImage: `url(${Images.coverConsultant})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Div className='phone:w-full tablet:w-1/3'>
                        <Text className='text-secondary-200 phone:text-center tablet:text-right'>
                            We'll brainstorm solutions together, debug errors, and refine your code, making you a better developer every step of the way.
                        </Text>
                        <Text className='text-secondary-200 phone:text-center tablet:text-right'>
                            Don't get overwhelmed by ambitious projects but break them down into manageable steps and guide you through each stage.
                        </Text>
                        <ButtonClassA className="border border-2 border-grey-100 phone:bg-transparent hover:bg-grey-100 text-dark-100 hover:text-white phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:ml-auto tablet:mr-0" onClick={() => router.push(`/${RouteNames.contact}`)}>
                            BOOK AN APPOINTMENT
                        </ButtonClassA>
                    </Div>
                </FlexRow>

                {/* /////////////////////////// */}
                {/* Tutorial Section            */}
                {/* /////////////////////////// */}
                <div id='services-content-tutorial' />
                <Spacer className='w-12 h-12 laptop:h-20' />

                {/*<TextDivider
                    className='bg-grey-100'
                    textType='center'
                    textElement={
                        <Text className='w-1/3 text-3xl text-dark-100 text-center font-serif uppercase'>
                            Math and Physics Tutorials
                        </Text>
                    }
                />*/}
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Math and Physics Tutorials
                </Text>

                <Spacer className='w-12 h-12' />
                <FlexRow className='w-full items-center phone:flex-col tablet:flex-row phone:justify-start tablet:justify-around'>
                    <Div
                        className='phone:w-full tablet:hidden h-300px bg-grey-400 mb-8 tablet:mb-0'
                        style={{
                            backgroundImage: `url(${Images.coverMath})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Div className='phone:w-full tablet:w-1/3'>
                        <Text className='text-secondary-200 phone:text-center tablet:text-left'>
                            Learn at your own speed, revisiting concepts or skipping ahead as needed.
                        </Text>
                        <Text className='text-secondary-200 phone:text-center tablet:text-left'>
                            Receive one-on-one guidance and support to ensure you grasp every concept.
                        </Text>
                        <ButtonClassA className="border border-2 border-grey-100 phone:bg-transparent hover:bg-grey-100 text-dark-100 hover:text-white phone:py-2 phone:px-4 my-8 phone:block tablet:inline-block  phone:mx-auto tablet:ml-0 tablet:mr-auto" onClick={() => router.push(`/${RouteNames.contact}`)}>
                            START LEARNING
                        </ButtonClassA>
                    </Div>
                    <Div
                        className='phone:hidden tablet:block w-1/3 h-300px bg-grey-400'
                        style={{
                            backgroundImage: `url(${Images.coverMath})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </FlexRow>

                {/* /////////////////////////// */}
                {/* Investment Section          */}
                {/* /////////////////////////// */}
                <div id='services-content-invest' />
                <Spacer className='w-12 h-12 laptop:h-20' />

                {/*<TextDivider
                    className='bg-grey-100'
                    textType='center'
                    textElement={
                        <Text className='w-1/3 text-3xl text-dark-100 text-center font-serif uppercase'>
                            Stock Market and Investments
                        </Text>
                    }
                />*/}
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Stock Market and Investments
                </Text>

                <Spacer className='w-12 h-12' />
                <FlexRow className='w-full items-center phone:flex-col tablet:flex-row phone:justify-start tablet:justify-around'>
                    <Div
                        className='phone:w-full tablet:w-1/3 aspect-[3/2] bg-grey-400 mb-8 tablet:mb-0'
                        style={{
                            backgroundImage: `url(${Images.coverStocks})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Div className='phone:w-full tablet:w-1/3'>
                        <Text className='text-secondary-200 phone:text-center tablet:text-right'>
                            From beginner basics to advanced strategies, we offer tailored learning journeys for every investor and trader.
                        </Text>
                        <Text className='text-secondary-200 phone:text-center tablet:text-right'>
                            Gain valuable insights and strategies you can implement immediately to improve your investment and trading decisions.
                        </Text>
                        <a
                            className="duration-700 shadow-lg py-1 px-4 font-bold border border-2 border-grey-100 phone:bg-transparent hover:bg-grey-100 text-dark-100 hover:text-white phone:py-2 phone:px-4 my-8 w-28 block phone:mx-auto tablet:ml-auto tablet:mr-0"
                            href={RedirectionURL.investment}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Text className="text-center">EXPLORE</Text>
                        </a>
                    </Div>
                </FlexRow>

                {/* /////////////////////////// */}
                {/* Web Section                 */}
                {/* /////////////////////////// */}
                <div id='services-content-web' />
                <Spacer className='w-12 h-12 laptop:h-20' />

                {/* <TextDivider
                    className='bg-grey-100'
                    textType='center'
                    textElement={
                        <Text className='w-1/3 text-3xl text-dark-100 text-center font-serif uppercase'>
                            Web Apps & Websites
                        </Text>
                    }
                /> */}
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Web Apps & Websites
                </Text>

                <Spacer className='w-12 h-12' />
                <FlexRow className='w-full items-center phone:flex-col tablet:flex-row phone:justify-start tablet:justify-around'>
                    <Spacer className='phone:w-full tablet:hidden h-300px bg-grey-400 mb-8 tablet:mb-0' />
                    <Div className='phone:w-full tablet:w-1/3'>
                        <Text className='text-secondary-200 phone:text-center tablet:text-left'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra dui quis tortor accumsan commodo. Morbi facilisis ipsum libero, sit amet hendrerit ligula dictum in. Fusce cursus tortor ut quam pharetra, vel venenatis ipsum tincidunt. Mauris vel erat porta, malesuada felis et, porttitor purus. Sed nisl ante, fringilla sit amet.
                        </Text>
                        <ButtonClassA className="border border-2 border-grey-100 phone:bg-transparent hover:bg-grey-100 text-dark-100 hover:text-white phone:py-2 phone:px-4 my-8 phone:block tablet:inline-block phone:mx-auto tablet:ml-0 tablet:mr-auto" onClick={() => router.push(`/${RouteNames.contact}`)}>
                            INQUIRE NOW
                        </ButtonClassA>
                    </Div>
                    <Spacer className='phone:hidden tablet:block w-1/3 h-300px bg-grey-400' />
                </FlexRow>

                {/* ////////////////////////////// */}
                {/* Mobile/Desktop Section         */}
                {/* ////////////////////////////// */}
                <div id='services-content-mobile' />
                <Spacer className='w-12 h-12 laptop:h-20' />

                {/*<TextDivider
                    className='bg-grey-100'
                    textType='center'
                    textElement={
                        <Text className='w-1/3 text-3xl text-dark-100 text-center font-serif uppercase'>
                            Mobile, Desktop Apps Development
                        </Text>
                    }
                />*/}
                <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Mobile, Desktop Apps Development
                </Text>

                <Spacer className='w-12 h-12' />
                <FlexRow className='w-full items-center phone:flex-col tablet:flex-row phone:justify-start tablet:justify-around'>
                    <Div
                        className='phone:w-full tablet:w-1/3 aspect-[3/2] bg-grey-400 mb-8 tablet:mb-0'
                    /* style={{
                            backgroundImage: `url(${Images.coverStocks})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }} */
                    />
                    <Div className='phone:w-full tablet:w-1/3'>
                        <Text className='text-secondary-200 phone:text-center tablet:text-right'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra dui quis tortor accumsan commodo. Morbi facilisis ipsum libero, sit amet hendrerit ligula dictum in. Fusce cursus tortor ut quam pharetra, vel venenatis ipsum tincidunt. Mauris vel erat porta, malesuada felis et, porttitor purus. Sed nisl ante, fringilla sit amet.
                        </Text>
                        <ButtonClassA className="border border-2 border-grey-100 phone:bg-transparent hover:bg-grey-100 text-dark-100 hover:text-white phone:py-2 phone:px-4 my-8 block phone:mx-auto tablet:ml-auto tablet:mr-0" onClick={() => router.push(`/${RouteNames.contact}`)}>
                            INQUIRE NOW
                        </ButtonClassA>
                    </Div>
                </FlexRow>

                <Spacer className='w-10 h-10' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
            </Div>
        </Div>
    );
};