'use client'
import React from 'react';
import s from './button.module.scss';
import clsx from "clsx";

interface ButtonProps {
    title: string;
    onClick?: () => void;
}

export const Button = ({title, onClick}: ButtonProps) => {

    return (
        <button
            className={clsx(s.btn, 'subtitle-sb')}
            onClick={onClick}>
            {title}
        </button>
    );
};
