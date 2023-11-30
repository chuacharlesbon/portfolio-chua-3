import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from "react-icons/fa6";
import { Div, FlexRow, Spacer } from "@/components/core/Containers";
import { Span } from "@/components/core/TextElements";
import { ButtonClassA } from '../core/Forms/Buttons';

interface DataProps {
    onClick?: any;
}

export const BackButton: FC<DataProps> = ({ onClick }) => {
    const router = useRouter();
    return (
        <Div className='w-full px-8 py-4 hidden'>
            <ButtonClassA className='phone:shadow-none' onClick={() => {
                if(onClick){
                    onClick();
                }
                history.back();
            }}>
                <FlexRow className='font-bold text-primary-100 text-xl items-center'>
                    <FaChevronLeft />
                    <Spacer className='w-4 h-4' />
                    <Span>
                        Back
                    </Span>
                </FlexRow>
            </ButtonClassA>
        </Div>
    )
}