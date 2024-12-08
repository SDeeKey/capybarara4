import React from 'react';
import s from './tag.module.scss'
import clsx from "clsx";

export const Tag = ({title}: {title: string}) => {
    return (
        <div className={s['tag']}>
            <h3 className={clsx(s.tag__text, 'medium')}>{title}</h3>
        </div>
    );
};