import React, { FC } from 'react';

interface DataProps {
    className?: string;
    children?: any;
    props?: any;
}

export const Appbar: FC<DataProps> = ({ className, children, ...props }) => (
    <div>
        Navbar
    </div>
);