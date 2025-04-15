import React, { FC } from 'react';
import Image from 'next/image';
import { Div, FlexColumn, FlexRow, Spacer, TextDivider } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Span, Text } from "@/components/core/TextElements";
import { Images } from "@/constants/assets";
import { useRouter } from 'next/router';
import { RedirectionURL, RouteNames } from '@/constants/constants';
import { FaCheck } from 'react-icons/fa6';

export const ServicesContents: FC<any> = () => {

    const router = useRouter();

    return (
        <Div className='w-full bg-grey-600'>
            <Div className='phone:w-full tablet:w-10/12 mx-auto p-4'>

                <Spacer className='w-20 h-20 hidden laptop:block' />

                {/* ///////////////////////////  */}
                {/* Development Packages Section */}
                {/* ///////////////////////////  */}
                <div id='services-content-packages' />
                <Spacer className='w-10 h-10' />

                {/* <TextDivider
                    className='bg-grey-100'
                    textType='center'
                    textElement={
                        <Text className='w-1/3 text-3xl text-dark-100 text-center font-serif uppercase'>
                            Programming Consultant
                        </Text>
                    }
                /> */}
                {/* <Text className="text-dark-100 text-2xl laptop:text-3xl desktop:text-4xl text-center font-semibold">
                    Plans and Packages
                </Text>

                <Spacer className='w-12 h-12' />
                <FlexRow className='w-full items-center phone:flex-col tabletWide:flex-row phone:justify-start tabletWide:justify-around tabletWide:items-start'>
                    <FlexColumn className='p-4 phone:w-full tabletWide:w-30p tabletWide:h-700px laptop:h-600px desktop:h-500px shadow-lg rounded-xl border border-white hover:border-grey-400 hover:shadow-2xl duration-700 justify-between'>
                        <Div>
                            <Text className='font-bold text-3xl'>
                                Basic
                                <Span className='block text-sm mx-1'>starts at ₱ 10,000.00</Span>
                                <Span className='block text-secondary-200 text-sm mx-1 font-normal'>{"(Development fee)"}</Span>
                            </Text>
                            <Spacer className='w-5 h-5' />
                            <Text className='text-sm'>Perfect for: Startups, small businesses, or individuals needing a simple online presence quickly and affordably.</Text>
                            <Spacer className='w-full h-5 mb-5 border-b border-grey-400' />
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>With website and admin dashboard management</Text>
                            </FlexRow>
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>via Wix / Shopify</Text>
                            </FlexRow>
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>Basic SEO setup (title tags, meta descriptions).</Text>
                            </FlexRow>
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>Domain name not included</Text>
                            </FlexRow>
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>from ₱ 1,250.00 / month {"(Maintenance Fee after launch)"}</Text>
                            </FlexRow>
                            <Spacer className='w-full h-5 mb-5 border-b border-grey-400' />
                            <Text className='text-sm'>Price may vary for one-time development or long-term support</Text>    
                        </Div>
                        <ButtonClassA className="border border-2 border-grey-100 phone:bg-transparent hover:bg-grey-100 text-dark-100 hover:text-white phone:py-2 phone:px-4 mt-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => router.push(`/${RouteNames.contact}`)}>
                            Learn More
                        </ButtonClassA>
                    </FlexColumn>
                    <FlexColumn className='p-4 phone:w-full tabletWide:w-30p tabletWide:h-700px laptop:h-600px desktop:h-500px shadow-lg rounded-xl border border-white hover:border-grey-400 hover:shadow-2xl duration-700 justify-between'>
                        <Div>
                            <Text className='font-bold text-3xl'>
                                Custom
                                <Span className='block text-sm mx-1'>starts at ₱ 50,000.00</Span>
                                <Span className='block text-secondary-200 text-sm mx-1 font-normal'>{"(Development fee)"}</Span>
                            </Text>
                            <Spacer className='w-5 h-5' />
                            <Text className='text-sm'>Perfect for: Businesses requiring a unique and scalable web solution tailored to their specific needs.</Text>
                            <Spacer className='w-full h-5 mb-5 border-b border-grey-400' />
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>With website and admin dashboard management</Text>
                            </FlexRow>
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>A fully custom-built website using modern frameworks</Text>
                            </FlexRow>
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>Advanced SEO optimization.</Text>
                            </FlexRow>
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>Google / Firebase / AWS for hosting</Text>
                            </FlexRow>
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>from ₱ 2,500.00 / month {"(Maintenance Fee after launch)"}</Text>
                            </FlexRow>
                            <Spacer className='w-full h-5 mb-5 border-b border-grey-400' />
                            <Text className='text-sm'>Price may vary for one-time development or long-term support</Text>
                        </Div>
                        <ButtonClassA className="border border-2 border-grey-100 phone:bg-transparent hover:bg-grey-100 text-dark-100 hover:text-white phone:py-2 phone:px-4 mt-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => router.push(`/${RouteNames.contact}`)}>
                            Learn More
                        </ButtonClassA>
                    </FlexColumn>
                    <FlexColumn className='p-4 phone:w-full tabletWide:w-30p tabletWide:h-700px laptop:h-600px desktop:h-500px shadow-lg rounded-xl border border-white hover:border-grey-400 hover:shadow-2xl duration-700 justify-between'>
                        <Div>
                            <Text className='font-bold text-3xl'>
                                Enterprise
                                <Span className='block text-sm mx-1'>{"Set an appointment"}</Span>
                                <Span className='block text-secondary-200 text-sm mx-1 font-normal'>{"(Development fee)"}</Span>
                            </Text>
                            <Spacer className='w-5 h-5' />
                            <Text className='text-sm'>Perfect for: Businesses requiring a unique and scalable web solution tailored to their specific needs.</Text>
                            <Spacer className='w-full h-5 mb-5 border-b border-grey-400' />
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>Everything included in the Custom Plan, plus:</Text>
                            </FlexRow>
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>Dedicated project manager.</Text>
                            </FlexRow>
                            <FlexRow className='justify-start items-center my-2 hidden'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>Custom API development and integrations.</Text>
                            </FlexRow>
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>Scalable architecture to handle high traffic and data volumes.</Text>
                            </FlexRow>
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>Priority support and maintenance.</Text>
                            </FlexRow>
                            <FlexRow className='justify-start items-center my-2'>
                                <FaCheck className='block text-sm text-green-100 mr-4' />
                                <Text className='text-sm'>Advanced security measures and compliance.</Text>
                            </FlexRow>
                            <Spacer className='w-full h-5 mb-5 border-b border-grey-400' />
                            <Text className='text-sm'>Price may vary for one-time development or long-term support</Text>
                        </Div>
                        <ButtonClassA className="border border-2 border-grey-100 phone:bg-transparent hover:bg-grey-100 text-dark-100 hover:text-white phone:py-2 phone:px-4 mt-8 block phone:mx-auto tablet:mr-auto tablet:ml-0" onClick={() => router.push(`/${RouteNames.contact}`)}>
                            Learn More
                        </ButtonClassA>
                    </FlexColumn>
                </FlexRow> */}
                

                {/* /////////////////////////// */}
                {/* Consultant Section         */}
                {/* /////////////////////////// */}
                <div id='services-content-consult' />
                <Spacer className='w-10 h-10 laptop:h-20' />

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
                            Brainstorm solutions together, debug errors, and refine your code, making you a better developer every step of the way.
                        </Text>
                        <Text className='text-secondary-200 phone:text-center tablet:text-right'>
                            Feel confident and capable of complex projects, breaking them down into manageable steps and guide you through each stage.
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
