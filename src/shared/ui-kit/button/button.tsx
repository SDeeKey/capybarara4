'use client'
import React from 'react';
import s from './button.module.scss';
import clsx from "clsx";

interface ButtonProps {
    title: string;
    anchorId?: string;
    onClick?: () => void;
}

export const Button = ({title, anchorId, onClick}: ButtonProps) => {

    const handleClick = () => {
        if(anchorId) {
            const anchor = document.getElementById(anchorId);
            if (anchor) {
                anchor.scrollIntoView({behavior: 'smooth'});
            }
        }
        else if (onClick) {
            onClick();
        }
    }

    if (onClick) {
        onClick(); // Вызов логики из родительского компонента
    }

    return (
        <button className={clsx(s.btn, 'subtitle-sb')} onClick={handleClick}>
            {title}
        </button>
    );
};
