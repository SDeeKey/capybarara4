'use client'

import React from 'react';
import s from './button.module.scss';
import clsx from "clsx";

interface ButtonProps {
    title: string;
    onClick?: () => void;
    className?: string;
}

export const Button = ({className, title, onClick}: ButtonProps) => {
    return (
        <button
            className={clsx(s.btn, 'subtitle--sb', className)}
            onClick={onClick}>
            {title}
        </button>
    );
};
