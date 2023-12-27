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
            <Div className='w-10/12 mx-auto p-4'>

                <Spacer className='w-20 h-20 hidden laptop:block' />
                <div id='services-content-consult' />
                <Spacer className='w-10 h-10 laptop:h-20' />
                
                {/* /////////////////////////// */}
                {/* Consultant Section         */}
                {/* /////////////////////////// */}
                
                <TextDivider
                    className='bg-grey-100'
                    textType='center'
                    textElement={
                        <Text className='w-1/3 text-3xl text-dark-100 text-center font-serif uppercase'>
                            Software Engineering Consultant
                        </Text>
                    }
                />
                <Spacer className='w-12 h-12' />
                <FlexRow className='w-full items-center justify-around'>
                    <Spacer className='w-1/3 h-300px bg-grey-400' />
                    <Div className='w-1/3'>
                        <Text className='text-secondary-200'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra dui quis tortor accumsan commodo. Morbi facilisis ipsum libero, sit amet hendrerit ligula dictum in. Fusce cursus tortor ut quam pharetra, vel venenatis ipsum tincidunt. Mauris vel erat porta, malesuada felis et, porttitor purus. Sed nisl ante, fringilla sit amet.
                        </Text>
                        <ButtonClassA className="border border-2 border-grey-100 phone:bg-transparent hover:bg-grey-100 text-dark-100 hover:text-white phone:py-2 phone:px-4 my-8" onClick={() => router.push(`/${RouteNames.contact}`)}>
                            BOOK AN APPOINTMENT
                        </ButtonClassA>
                    </Div>
                </FlexRow>
                
                {/* /////////////////////////// */}
                {/* Web Section                 */}
                {/* /////////////////////////// */}
                <div id='services-content-web' />
                <Spacer className='w-12 h-12 laptop:h-20' />
                <TextDivider
                    className='bg-grey-100'
                    textType='center'
                    textElement={
                        <Text className='w-1/3 text-3xl text-dark-100 text-center font-serif uppercase'>
                            Web Apps & Websites
                        </Text>
                    }
                />
                <Spacer className='w-12 h-12' />
                <FlexRow className='w-full items-center justify-around'>
                    <Div className='w-1/3'>
                        <Text className='text-secondary-200'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra dui quis tortor accumsan commodo. Morbi facilisis ipsum libero, sit amet hendrerit ligula dictum in. Fusce cursus tortor ut quam pharetra, vel venenatis ipsum tincidunt. Mauris vel erat porta, malesuada felis et, porttitor purus. Sed nisl ante, fringilla sit amet.
                        </Text>
                        <ButtonClassA className="border border-2 border-grey-100 phone:bg-transparent hover:bg-grey-100 text-dark-100 hover:text-white phone:py-2 phone:px-4 my-8" onClick={() => router.push(`/${RouteNames.contact}`)}>
                            INQUIRE NOW
                        </ButtonClassA>
                    </Div>
                    <Spacer className='w-1/3 h-300px bg-grey-400' />
                </FlexRow>
                
                {/* ////////////////////////////// */}
                {/* Mobile/Desktop Section         */}
                {/* ////////////////////////////// */}
                <div id='services-content-mobile' />
                <Spacer className='w-12 h-12 laptop:h-20' />
                <TextDivider
                    className='bg-grey-100'
                    textType='center'
                    textElement={
                        <Text className='w-1/3 text-3xl text-dark-100 text-center font-serif uppercase'>
                            Mobile, Desktop Apps Development
                        </Text>
                    }
                />
                <Spacer className='w-12 h-12' />
                <FlexRow className='w-full items-center justify-around'>
                    <Spacer className='w-1/3 h-300px bg-grey-400' />
                    <Div className='w-1/3'>
                        <Text className='text-secondary-200'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra dui quis tortor accumsan commodo. Morbi facilisis ipsum libero, sit amet hendrerit ligula dictum in. Fusce cursus tortor ut quam pharetra, vel venenatis ipsum tincidunt. Mauris vel erat porta, malesuada felis et, porttitor purus. Sed nisl ante, fringilla sit amet.
                        </Text>
                        <ButtonClassA className="border border-2 border-grey-100 phone:bg-transparent hover:bg-grey-100 text-dark-100 hover:text-white phone:py-2 phone:px-4 my-8" onClick={() => router.push(`/${RouteNames.contact}`)}>
                            INQUIRE NOW
                        </ButtonClassA>
                    </Div>
                </FlexRow>
                
                {/* /////////////////////////// */}
                {/* Tutorial Section            */}
                {/* /////////////////////////// */}
                <div id='services-content-tutorial' />
                <Spacer className='w-12 h-12 laptop:h-20' />
                <TextDivider
                    className='bg-grey-100'
                    textType='center'
                    textElement={
                        <Text className='w-1/3 text-3xl text-dark-100 text-center font-serif uppercase'>
                            Math and Physics Tutorials
                        </Text>
                    }
                />
                <Spacer className='w-12 h-12' />
                <FlexRow className='w-full items-center justify-around'>
                    <Div className='w-1/3'>
                        <Text className='text-secondary-200'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra dui quis tortor accumsan commodo. Morbi facilisis ipsum libero, sit amet hendrerit ligula dictum in. Fusce cursus tortor ut quam pharetra, vel venenatis ipsum tincidunt. Mauris vel erat porta, malesuada felis et, porttitor purus. Sed nisl ante, fringilla sit amet.
                        </Text>
                        <ButtonClassA className="border border-2 border-grey-100 phone:bg-transparent hover:bg-grey-100 text-dark-100 hover:text-white phone:py-2 phone:px-4 my-8" onClick={() => { }}>
                            START LEARNING
                        </ButtonClassA>
                    </Div>
                    <Spacer className='w-1/3 h-300px bg-grey-400' />
                </FlexRow>
                
                {/* /////////////////////////// */}
                {/* Investment Section          */}
                {/* /////////////////////////// */}
                <div id='services-content-invest' />
                <Spacer className='w-12 h-12 laptop:h-20' />
                <TextDivider
                    className='bg-grey-100'
                    textType='center'
                    textElement={
                        <Text className='w-1/3 text-3xl text-dark-100 text-center font-serif uppercase'>
                            Stock Market and Investments
                        </Text>
                    }
                />
                <Spacer className='w-12 h-12' />
                <FlexRow className='w-full items-center justify-around'>
                    <Spacer className='w-1/3 h-300px bg-grey-400' />
                    <Div className='w-1/3'>
                        <Text className='text-secondary-200'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra dui quis tortor accumsan commodo. Morbi facilisis ipsum libero, sit amet hendrerit ligula dictum in. Fusce cursus tortor ut quam pharetra, vel venenatis ipsum tincidunt. Mauris vel erat porta, malesuada felis et, porttitor purus. Sed nisl ante, fringilla sit amet.
                        </Text>
                        <a
                            className="inline-block duration-700 shadow-lg py-1 px-4 font-bold border border-2 border-grey-100 phone:bg-transparent hover:bg-grey-100 text-dark-100 hover:text-white phone:py-2 phone:px-4 my-8"
                            href={RedirectionURL.investment}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            EXPLORE
                        </a>
                    </Div>
                </FlexRow>

                <Spacer className='w-10 h-10' />
                <Spacer className='w-20 h-20 hidden laptop:block' />
            </Div>
        </Div>
    );
};