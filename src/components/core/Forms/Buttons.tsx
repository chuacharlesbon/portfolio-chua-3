import React, { FC } from 'react';

interface DataProps {
    className?: string;
    children: any;
    onClick: any;
    isSubmit?: boolean;
}

export const ButtonClassA: FC<DataProps> = ({ className, children, onClick, isSubmit }) => {

    return (
            <button
                className={`duration-700 shadow-lg border border-primary-100 rounded-md py-1 px-4 font-bold text-white hover:bg-white hover:text-primary-100 ${className}`}
                onClick={onClick}
                type={isSubmit ? "submit" : "button"}
            >
                {children}
            </button>
    );
};