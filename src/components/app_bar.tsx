import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { Div, FlexRow, Spacer } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Text } from "@/components/core/TextElements";
import { RawInput } from '@/components/core/Forms/RawInput';
import { Images } from "@/constants/assets";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AppBarSlider: FC<any> = () => {
    const responsive = {
        mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    };
    return (
        <Div className='w-200px hidden'>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            >
                <FlexRow className='justify-center w-full h-12 border border-grey-400'>
                    <Image
                        src={Images.okada}
                        alt="C Logo"
                        className='object-contain'
                        width={200}
                        height={50}
                    />
                </FlexRow>
                <FlexRow className='justify-center w-full h-12 bg-primary-100'>
                    <Image
                        src={Images.cebuana}
                        alt="C Logo"
                        className='object-contain'
                        width={200}
                        height={50}
                    />
                </FlexRow>
                <FlexRow className='justify-center w-full h-12 border border-grey-400'>
                    <Image
                        src={Images.xffiliate}
                        alt="C Logo"
                        className='object-contain'
                        width={200}
                        height={50}
                    />
                </FlexRow>
                <FlexRow className='justify-center w-full h-12 border border-grey-400'>
                    <Image
                        src={Images.gpa}
                        alt="C Logo"
                        className='object-contain'
                        width={200}
                        height={50}
                    />
                </FlexRow>
            </Carousel>
        </Div>
    );
};

export const SearchField: FC<any> = () => {
    return (
        <FlexRow className='w-full justify-between items-center'>
            <Div>
                <Text className='text-4xl font-bold'>
                    Charles C.
                </Text>
                <Text>
                    Full Stack Developer
                </Text>
            </Div>
            <Div className='relative w-300px'>
                <ButtonClassA className='absolute index-10 border border-purple-300 bg-purple-300 rounded-md px-4 py-2 right-0' onClick={() => { }}>
                    <FaSearch className="text-2xl" />
                </ButtonClassA>
                <RawInput className="border border-purple-300 rounded-md px-4 py-2" placeholder='Search' type="search" />
            </Div>
        </FlexRow>
    )
}

interface DataProps {
    location: string
    className?: string;
    children?: any;
    props?: any;
}

export const Appbar: FC<DataProps> = ({ location, className, children, ...props }) => (
    <Div className='relative w-full'>
        <FlexRow className='fixed index-10 justify-center items-center top-0 left-0 right-0 mx-auto w-48'>
            <Image
                src={Images.favicon}
                alt="C Logo"
                className='rounded-full border border-8 border-purple-1000'
                width={100}
                height={100}
            />
        </FlexRow>
        <FlexRow className='items-center justify-center w-full p-2 bg-purple-1000'>
            <ButtonClassA className='mx-2' onClick={() => { }}>
                ITEM 1
            </ButtonClassA>
            <ButtonClassA className='mx-2' onClick={() => { }}>
                ITEM 1
            </ButtonClassA>
            <ButtonClassA className='mx-2' onClick={() => { }}>
                ITEM 1
            </ButtonClassA>
            <ButtonClassA className='mx-2' onClick={() => { }}>
                ITEM 1
            </ButtonClassA>
            <Spacer className="w-48 h-4" />
            <ButtonClassA className='mx-2' onClick={() => { }}>
                ITEM 1
            </ButtonClassA>
            <ButtonClassA className='mx-2' onClick={() => { }}>
                ITEM 1
            </ButtonClassA>
            <ButtonClassA className='mx-2' onClick={() => { }}>
                ITEM 1
            </ButtonClassA>
            <ButtonClassA className='mx-2' onClick={() => { }}>
                ITEM 1
            </ButtonClassA>
        </FlexRow>
    </Div>
);