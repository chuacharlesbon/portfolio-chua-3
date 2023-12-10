'use client'
import React, { FC } from 'react';
import Image from 'next/image';
import { Div, FlexColumn, FlexRow, Spacer, TextDivider } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Text } from "@/components/core/TextElements";
import { Images } from "@/constants/assets";
import { RawInput } from '@/components/core/Forms/RawInput';
import { FormLabel } from '@/components/core/Forms/FormLabel';

export const ContactContents: FC<any> = () => {

    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');

    return (
        <Div className='w-10/12 py-12 mx-auto my-12 shadow-xl'>
            <FlexRow className='w-full items-center justify-around'>
                <Div className='w-1/3'>
                    <Text className='text-secondary-200 text-2xl font-semibold'>
                        Feel free to send me a message anytime!
                    </Text>
                    <Spacer className='w-8 h-8' />
                    <form>
                        <FormLabel className='text-primary-100 font-bold'>
                            Name:
                        </FormLabel>
                        <RawInput
                            className='border-secondary-300 p-2'
                            onChange={setName}
                            type='name'
                        />
                        <Spacer className='w-4 h-4' />
                        <FormLabel className='text-primary-100 font-bold'>
                            Email:
                        </FormLabel>
                        <RawInput
                            className='border-secondary-300 p-2'
                            onChange={setEmail}
                            type='email'
                        />
                        <Spacer className='w-8 h-8' />
                        <ButtonClassA className="w-full rounded-lg border border-blue-100 text-white bg-blue-100 phone:shadow-none phone:py-2 phone:px-4 hover:bg-primary-100 hover:border-primary-100" onClick={() => { }}>
                            SEND
                        </ButtonClassA>
                        <Spacer className='w-4 h-4' />
                        <a className="text-blue-100 block" href="mailto:charlessbonnchua@gmail.com?cc=chuacharlesbon@gmail.com&subject=Client%20Inquiry" target="_top">
                            Send a message via email
                        </a>
                    </form>
                </Div>
                <Spacer className='h-200px w-px bg-blue-300' />
                <Div className='w-1/3 aspect-[3/2] rounded-lg' style={{
                    backgroundImage: `url(${Images.deskAngle2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'cover',
                }}>
                </Div>
            </FlexRow>
        </Div>
    );
};