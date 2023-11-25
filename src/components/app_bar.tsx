import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Div, FlexRow, Spacer } from "@/components/core/Containers";
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

interface DataProps {
    location: string
    className?: string;
    children?: any;
    props?: any;
}

export const Appbar: FC<DataProps> = ({ location, className, children, ...props }) => (
    <FlexRow className='justify-between items-center w-full p-8'>
        <FlexRow>
            <Image
                src={Images.favicon}
                alt="C Logo"
                className='rounded-full'
                width={50}
                height={50}
            />
            <Spacer className="w-20 h-4 hidden" />
            <AppBarSlider />
        </FlexRow>
        <FlexRow>
            <Link className='px-4' href="/terms">Item 1</Link>
            <Link className='px-4' href="/terms">Item 1</Link>
            <Link className='px-4' href="/terms">Item 1</Link>
            <Link className='px-4' href="/terms">Item 1</Link>
        </FlexRow>
    </FlexRow>
);