'use client'

import React from 'react';
import s from './button.module.scss';
import clsx from "clsx";

interface ButtonProps {
    title: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit';
    href?: string;
}

export const Button = ({className, title, onClick, href}: ButtonProps) => {
    return (
        <button
            className={clsx(
                s['btn'],
                'subtitle--sb',
                className
            )}
            onClick={onClick}
        >
            <a href={href}>
                {title}
            </a>

        </button>
    );
};
