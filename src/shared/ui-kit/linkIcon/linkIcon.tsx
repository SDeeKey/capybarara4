import React from 'react';
import clsx from 'clsx';
import LinkIconSvg from '@/img/linkIcon.svg';
import s from './linkIcon.module.scss'

interface LinkIconProps {
    link: string;
    size: 'md' | 'lg';
}

export const LinkIcon = ({link, size = 'md'}: LinkIconProps) => {
    return (
        <a href={link}
           target='_blank'
           rel='noopener noreferrer'
           className={
            clsx(
                s['iconButtonLink'],
                s[`iconButtonLink--${size}`]
            )}>
            <LinkIconSvg />
        </a>
    );
};
