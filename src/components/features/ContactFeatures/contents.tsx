'use client'
import React, { FC } from 'react';
import Image from 'next/image';
import { Div, FlexColumn, FlexRow, Spacer, TextDivider } from "@/components/core/Containers";
import { ButtonClassA } from '@/components/core/Forms/Buttons';
import { Text } from "@/components/core/TextElements";
import { Images } from "@/constants/assets";
import { RawInput } from '@/components/core/Forms/RawInput';
import { FormLabel } from '@/components/core/Forms/FormLabel';
import axios from 'axios';
import { ToastDialogInfo } from '@/components/core/Toast';
import UserContext from '@/context';

export const ContactContents: FC<any> = () => {

    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isToastOpenSuccess, setToastOpenSuccess] = React.useState(false);
    const [isToastOpenError, setToastOpenError] = React.useState(false);

    const onSubmit = async () => {
        axios({
            method: 'POST',
            url: 'https://portfolio-chua-c.vercel.app/api/message',
            data: {
                referrer: "https://portfolio-chua-c.vercel.app",
                senderName: name,
                email: email,
                message: message,
                fromApp: "Portfolio 2024 Website"
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer '
            },
        })
        /* axios.post(
            'https://cmt-server-1.vercel.app/api/s1/message',
            {
                referrer: "https://portfolio-chua-c.vercel.app",
                senderName: name,
                email: email,
                message: message,
                fromApp: "Portfolio 2024 Website"
            },
        ) */
        /* await fetch('https://cmt-server-1.vercel.app/api/s1/message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				referrer: "https://portfolio-chua-c.vercel.app",
                senderName: name,
                email: email,
                message: message,
                fromApp: "Portfolio 2024 Website"
			})
		}) */
            .then((response) => {
                setName('');
                setEmail('');
                setMessage('');
                setToastOpenSuccess(true);
                setTimeout(() => {
                    setToastOpenSuccess(false);
                }, 3000);
            })
            .catch((err) => {
                setToastOpenError(true);
                setTimeout(() => {
                    setToastOpenError(false);
                }, 3000);
            });
    }

    const {user, setUser} = React.useContext(UserContext);
    console.log(user);
    React.useEffect(() => {
        setUser("Contact content");
        console.log(user);
    }, []);

    return (
        <Div className='w-full bg-grey-600 py-10 laptop:py-20'>
            <div id='contact-content-1' />
            <Div className='w-10/12 py-12 mx-auto rounded-md shadow-xl bg-white'>
                {
                    isToastOpenSuccess
                        ? <ToastDialogInfo
                            title="SUCCESS"
                            toastKind="success"
                            onClose={() => setToastOpenSuccess(false)}
                            isOpen={isToastOpenSuccess}
                        >
                            <Text className='text-dark-100 text-center py-4'>
                                Your message has been submitted successfully.
                            </Text>
                        </ToastDialogInfo>
                        : <></>
                }
                {
                    isToastOpenError
                        ? <ToastDialogInfo
                            title="ERROR"
                            toastKind="error"
                            onClose={() => setToastOpenError(false)}
                            isOpen={isToastOpenError}
                        >
                            <Text className='text-dark-100 text-center py-4'>
                                Message sending failed. Something went wrong. Please try again or later.
                            </Text>
                        </ToastDialogInfo>
                        : <></>
                }
                <FlexRow className='phone:flex-col tabletWide:flex-row w-full items-center tabletWide:justify-around'>
                    <Div className='phone:w-full phone:px-4 tabletWide:px-0 tabletWide:w-1/3'>
                        <Text className='text-secondary-200 text-2xl font-semibold'>
                            Message Us Now!
                        </Text>
                        <Spacer className='w-8 h-8' />
                        <form>
                            <FormLabel className='text-dark-100 font-bold'>
                                Name:
                            </FormLabel>
                            <RawInput
                                className='border-secondary-300 p-2'
                                onChange={setName}
                                type='name'
                                value={name}
                            />
                            <Spacer className='w-4 h-4' />
                            <FormLabel className='text-dark-100 font-bold'>
                                Email:
                            </FormLabel>
                            <RawInput
                                className='border-secondary-300 p-2'
                                onChange={setEmail}
                                type='email'
                                value={email}
                            />
                            <Spacer className='w-4 h-4' />
                            <FormLabel className='text-dark-100 font-bold'>
                                Message:
                            </FormLabel>
                            <textarea
                                className='rounded-lg block w-full border border-secondary-300 p-2'
                                onChange={(event) => setMessage(event.target.value)}
                                placeholder="Comments/Requests/Appointments"
                                rows={4}
                                value={message}
                            />
                            <Spacer className='w-8 h-8' />
                            <ButtonClassA className="w-full rounded-lg border border-blue-100 text-white bg-blue-100 phone:shadow-none phone:py-2 phone:px-4 hover:bg-dark-100 hover:border-dark-100" onClick={() => onSubmit()}>
                                SEND
                            </ButtonClassA>
                            <Spacer className='w-4 h-4' />
                            <a className="text-blue-100 block" href="mailto:charlessbonnchua@gmail.com?cc=chuacharlesbon@gmail.com&subject=Client%20Inquiry" target="_top">
                                Send a message via email
                            </a>
                        </form>
                    </Div>
                    <Spacer className='hidden tabletWide:block h-200px w-px bg-blue-300' />
                    <Spacer className='block tabletWide:hidden w-8 h-8' />
                    <Div className='phone:w-10/12 tabletWide:w-1/3 aspect-[3/2] rounded-lg' style={{
                        backgroundImage: `url(${Images.deskAngle2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'cover',
                    }}>
                    </Div>
                </FlexRow>
            </Div>
        </Div>
    );
};