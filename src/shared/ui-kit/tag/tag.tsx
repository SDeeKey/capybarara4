import React from 'react';
import s from './tag.module.scss'
import clsx from "clsx";

export const Tag = ({title}: {title: string}) => {
    return (
        <div className={s['tag']}>
            <p className={clsx(s.tag__text, 'body-3--medium')}>
                {title}
            </p>
        </div>
    );
};
