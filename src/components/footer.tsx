import Image from 'next/image';
import { Div, FlexColumn, FlexRow, Spacer } from "@/components/core/Containers";
import { Text, Span } from "@/components/core/TextElements";
import { Images } from "@/constants/assets";
import Link from 'next/link';

export const Footer = () => (
    <Div className="w-full bg-white p-4 tablet:p-8">
        <Div className="w-full bg-white mx-auto laptop:w-1440px">
            <FlexRow className='w-full items-center justify-between'>
                <FlexRow className='items-center'>
                    <Image
                        src={Images.favicon}
                        alt="C Logo"
                        className='rounded-full'
                        width={50}
                        height={50}
                    />
                    <Spacer className='w-8 h-8' />
                    <Div>
                        <Text className="text-dark-100">
                            Full Stack Developer
                        </Text>
                        <Text className="text-xl text-dark-100 font-bold font-serif">
                            Charles Bon L. Chua
                        </Text>
                    </Div>
                </FlexRow>
                <FlexRow className='items-center'>
                    <Link href="https://zuitt.co/" target='_blank'>
                        <Image
                            src={Images.zuitt}
                            alt="C Logo"
                            className='rounded-full object-cover mx-4'
                            width={120}
                            height={40}
                        />
                    </Link>
                    <Link href="https://www.xtendly.com/" target='_blank'>
                        <Image
                            src={Images.xtendly}
                            alt="C Logo"
                            className='rounded-full object-cover mx-4'
                            width={120}
                            height={40}
                        />
                    </Link>
                    <Link href="https://www.vontos.co/" target='_blank'>
                        <Image
                            src={Images.vontos}
                            alt="C Logo"
                            className='rounded-full object-cover mx-4'
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link href="https://prosperna.com/" target='_blank'>
                        <Image
                            src={Images.prosperna}
                            alt="C Logo"
                            className='rounded-full object-cover mx-4'
                            width={120}
                            height={40}
                        />
                    </Link>
                </FlexRow>
            </FlexRow>
            <Spacer className="w-8 h-8" />
            <FlexRow className='w-full items-start justify-start'>
                <FlexColumn className="w-2/5 items-start justify-start">
                    <FlexRow className='w-full'>
                        <FlexColumn className='w-1/2 items-start justify-start'>
                            <Link className='text-blue-100 my-1 hover:underline' href="/home">
                                Home
                            </Link>
                            <Link className='text-blue-100 my-1 hover:underline' href="/about">
                                About
                            </Link>
                            <Link className='text-blue-100 my-1 hover:underline' href="/works">
                                Works
                            </Link>
                            <Link className='text-blue-100 my-1 hover:underline' href="/contact">
                                Contact
                            </Link>
                        </FlexColumn>
                        <FlexColumn className='w-1/2 items-start justify-start'>
                            <Link className='text-blue-100 my-1 hover:underline' href="/skills">
                                Skills
                            </Link>
                            <Link className='text-blue-100 my-1 hover:underline' href="/services">
                                Services
                            </Link>
                            <Link className='text-blue-100 my-1 hover:underline' href="/connect">
                                Connect
                            </Link>
                            <Link className='text-blue-100 my-1 hover:underline' href="/explore">
                                Explore
                            </Link>
                        </FlexColumn>
                    </FlexRow>
                    <Spacer className="w-8 h-8" />
                    <Link className='text-blue-100 my-1 hover:underline' href="mailto:chuacharlesbon@gmail.com?cc=charlessbonnchua@gmail.com&subject=Client%20Inquiry" target="_top">
                        <Span className='mr-2'>
                            Email: 
                        </Span>
                        chuacharlesbon@gmail.com
                    </Link>
                    <Link className='text-blue-100 my-1 hover:underline' href="https://gitlab.com/chuacharlesbon" target="_blank">
                        <Span className='mr-2'>
                            Gitlab: 
                        </Span>
                        https://gitlab.com
                    </Link>
                    <Link className='text-blue-100 my-1 hover:underline' href="https://www.linkedin.com/in/charles-chua-12116122a/y" target="_blank">
                        <Span className='mr-2'>
                            LinkedIn: 
                        </Span>
                        https://www.linkedin.com
                    </Link>
                </FlexColumn>
                <Div className='w-3/5'>
                    <Text className='text-dark-100 my-1'>
                        Aiming to leverage my knowledge and experience in a new career environment and use my skills to achieve the company’s goal as a web developer.
                    </Text>
                    <Spacer className="w-2 h-2" />
                    <Text className='text-dark-100 my-1'>
                        Going an Extra mile is a part of me. Spending the first half of my 2022 studying Software Engineering, building my confidence and giving myself an edge to work in this industry.
                    </Text>
                    <Spacer className="w-2 h-2" />
                    <Text className='text-dark-100 my-1 pl-8'>
                        &#8226; Front End Web Development with Flutter, Reactjs, Nextjs, HTML5, CSS3, Bootstrap, Tailwind
                    </Text>
                    <Text className='text-dark-100 my-1 pl-8'>
                        &#8226; Back End Web Development with MongoDB, Express.js, Node.js, JavaScript, Typescript, Nextjs API
                    </Text>
                    <Text className='text-dark-100 my-1 pl-8'>
                        &#8226; Full Stack with MERN (MongoDB, Express.js, React.js, Node.js)
                    </Text>
                    <Spacer className="w-2 h-2" />
                    <Text className='text-dark-100 my-1'>
                        Mathematics
                        <Span className='mx-2 font-bold'>|</Span>
                        Mobile Apps
                        <Span className='mx-2 font-bold'>|</Span>
                        Web Developer
                        <Span className='mx-2 font-bold'>|</Span>
                        Consultant
                        <Span className='mx-2 font-bold'>|</Span>
                        Trainer
                    </Text>
                </Div>
            </FlexRow>
            <Text className='font-bold text-center text-dark-100 mt-12 mb-4'>
                Developer&lsquo;s Portfolio 2024
            </Text>
        </Div>
    </Div>
);