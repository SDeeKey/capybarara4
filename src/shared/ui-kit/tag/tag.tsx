import React from 'react';
import s from './tag.module.scss'


const Tag = ({title}: {title: string}) => {
    return (
        <div className={s['tag']}>
            <h3 className={`${s['tag__text']} body3-medium`}>{title}</h3>
        </div>
    );
};

export default Tag;