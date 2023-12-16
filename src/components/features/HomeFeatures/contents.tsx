'use client'
import React, { FC } from 'react';
import Image from 'next/image';
import { Div, FlexColumn, FlexRow, Spacer, TextDivider } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Text } from "@/components/core/TextElements";
import { Images } from "@/constants/assets";
import { RawInput } from '@/components/core/Forms/RawInput';
import { FormLabel } from '@/components/core/Forms/FormLabel';

export const HomeContents: FC<any> = () => {

    const [myState, setState] = React.useState('');

    return (
        <Div className='w-10/12 py-12 mx-auto my-12 p-4'>
            <Spacer className='w-10 h-10' />
            <Text className="text-dark-100 text-2xl font-semibold">
                Latest News!
            </Text>
            <Spacer className='w-10 h-10' />
        </Div>
    );
};