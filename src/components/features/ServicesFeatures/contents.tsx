import React, { FC } from 'react';
import Image from 'next/image';
import { Div, FlexColumn, FlexRow, Spacer, TextDivider } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Text } from "@/components/core/TextElements";
import { Images } from "@/constants/assets";

export const ServicesContents: FC<any> = () => {
    return (
        <Div className='w-10/12 py-24 mx-auto'>
            <TextDivider
                className='bg-grey-100'
                textType='center'
                textElement={
                    <Text className='text-3xl text-primary-100 text-center font-serif uppercase'>
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
                </Div>
            </FlexRow>
            <Spacer className='w-12 h-12' />
            <TextDivider
                className='bg-grey-100'
                textType='center'
                textElement={
                    <Text className='text-3xl text-primary-100 text-center font-serif uppercase'>
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
                </Div>
                <Spacer className='w-1/3 h-300px bg-grey-400' />
            </FlexRow>
            <Spacer className='w-12 h-12' />
            <TextDivider
                className='bg-grey-100'
                textType='center'
                textElement={
                    <Text className='text-3xl text-primary-100 text-center font-serif uppercase'>
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
                </Div>
            </FlexRow>
            <Spacer className='w-12 h-12' />
            <TextDivider
                className='bg-grey-100'
                textType='center'
                textElement={
                    <Text className='text-3xl text-primary-100 text-center font-serif uppercase'>
                        Engineering and Math Tutorials
                    </Text>
                }
            />
            <Spacer className='w-12 h-12' />
            <FlexRow className='w-full items-center justify-around'>
                <Div className='w-1/3'>
                    <Text className='text-secondary-200'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra dui quis tortor accumsan commodo. Morbi facilisis ipsum libero, sit amet hendrerit ligula dictum in. Fusce cursus tortor ut quam pharetra, vel venenatis ipsum tincidunt. Mauris vel erat porta, malesuada felis et, porttitor purus. Sed nisl ante, fringilla sit amet.
                    </Text>
                </Div>
                <Spacer className='w-1/3 h-300px bg-grey-400' />
            </FlexRow>
        </Div>
    );
};