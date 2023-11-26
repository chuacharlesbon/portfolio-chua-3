import { FC } from "react";
import Image from 'next/image';
import { Div, FlexRow } from "@/components/core/Containers";
import { Text } from "@/components/core/TextElements";
import { Images } from "@/constants/assets";

export const CoverFeature: FC<any> = () => {
    return (
        <Div className="w-full py-4 tablet:py-8 laptop:py-12">
            <FlexRow className="w-full items-center">
                <img
                    src={Images.cover}
                    alt="C Logo"
                    className='object-cover w-full tablet:w-1/2 laptop:w-3/4 mx-auto'
                />
            </FlexRow>
            <FlexRow className="w-full">
                <Div className="w-full tablet:w-1/2 laptop:w-3/4 mx-auto">
                    <Text className="italic font-xs">
                        Zuitt BootCamp, Batch 169
                    </Text>
                </Div>
            </FlexRow>
        </Div>
    )
}