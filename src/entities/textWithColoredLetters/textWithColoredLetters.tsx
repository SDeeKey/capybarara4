import React from 'react';
import s from './textWithColoredLetters.module.scss'
import clsx from "clsx";

interface TextProps {
    text: string;
    className?: string;
}

export const TextWithColoredLetters = ({className, text}: TextProps) => {
    const letters: string[] = Array.from(text);

    return (
        <div className={clsx(
            s['textWithColoredLetters'],
            className
        )}>
            {
                letters.map((letter, index)=>(
                <span
                    key={index}
                    className={s['textWithColoredLetters__letter']}
                >
                    {letter}
                </span>
            ))}
        </div>
    );
};
