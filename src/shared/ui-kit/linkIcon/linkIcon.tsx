import React from 'react';
import clsx from 'clsx';
import LinkIconSvg from './../../../img/linkIcon.svg';
import s from './linkIcon.module.scss'

interface LinkIconProps {
    link: string;
    size: 'md' | 'lg';
}

const LinkIcon = ({link, size = 'md'}: LinkIconProps) => {
    return (
        <a href={link} target='_blank' rel='noopener noreferrer' >
            <div className={clsx(s['button'], s[`button--${size}`])}>
                <LinkIconSvg />
            </div>
        </a>
    );
};

export default LinkIcon;