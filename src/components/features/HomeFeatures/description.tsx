import React, { FC } from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { Div, FlexRow, Spacer } from "@/components/core/Containers";
import { Text } from "@/components/core/TextElements";
import { ButtonClassA } from "@/components/core/Forms/Buttons";

export const Description: FC<any> = () => {
    const router = useRouter();
    return (
        <Div>
            <Spacer className="h-20 w-20" />
            <motion.div
                animate={{
                    opacity: 1,
                    y: 0, // Reset the y position to avoid jumping
                }}
                transition={{
                    delay: 0,
                    duration: 0.5,
                    ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                }}
                initial={{
                    opacity: 0,
                    y: +50, // Start the element off the top of the screen
                }}
            >
                <Div className="px-4 py-8 bg-white bg-opacity-40 hover:bg-opacity-80 laptop:w-900px duration-700 rounded-lg">
                    <Text className="text-center text-primary-100 italic">
                        <FaQuoteLeft className="text-xl text-primary-100 inline mr-2" />
                        A competent and goal-oriented person who demonstrates the capacity to handle multiple responsibilities with diligence and a positive outlook.
                    </Text>
                    <Spacer className="h-2 w-2" />
                    <Text className="text-center text-primary-100 italic">
                        Apply my expertise and experience in a new professional setting and apply my abilities to help the company reach its development objective.
                        <FaQuoteRight className="text-xl text-primary-100 inline ml-2" />
                    </Text>
                    <Spacer className="h-8 w-8" />
                    <Text className="text-center text-primary-100 font-bold">
                        Full Stack Developer
                    </Text>
                    <Text className="font-serif text-4xl text-center text-primary-100 italic">
                        Charles Bon L. Chua
                    </Text>
                </Div>
            </motion.div>
            <motion.div
                animate={{
                    opacity: 1,
                    y: 0, // Reset the y position to avoid jumping
                }}
                transition={{
                    delay: 0,
                    duration: 0.5,
                    ease: [0.4, 0.08, 0.23, 0.96], // Ease-in-out animation
                }}
                initial={{
                    opacity: 0,
                    y: +50, // Start the element off the top of the screen
                }}
            >
                <FlexRow className="w-full items-center justify-center py-8">
                    <ButtonClassA className="border border-2 border-white hover:bg-white text-white hover:text-primary-100 phone:py-4 phone:px-8" onClick={() => router.push('/home')}>
                        LEARN MORE
                    </ButtonClassA>
                </FlexRow>
            </motion.div>
        </Div>
    );
}