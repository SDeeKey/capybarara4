'use client'
import React from 'react';
import s from './button.module.scss';


interface ButtonProps {
    title: string;
    anchorId: string;
}

const Button = ({title, anchorId}: ButtonProps) => {

    const handleClick = () => {
        const anchor =  document.getElementById(anchorId);
        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div>
            <button className={`${s['btn']} subtitle-sb`} onClick={handleClick}>
                {title}
            </button>
        </div>
    );
};

export default Button;