import React from 'react';
import s from './work.module.scss'
import {WorkBlock} from "@/entities/workBlock/workBlock";
import {workDataItems} from "@/widgets/work/workData";
import clsx from "clsx";

export const Work = () => {
    return (
        <div className={clsx(
            s['work'],
            'section-wrapper'
        )}>
            <div className={s['work__title-block']}>
                <h1 className={clsx(
                    s['title'],
                    'heading-1'
                )}>
                    Work
                </h1>
                <p className={clsx(
                    s['subtitle'],
                    'subtitle--normal'
                )}>
                    Some of the noteworthy projects Capibarara have built:
                </p>
            </div>
            {
                workDataItems.map((item, index) => (
                    <WorkBlock
                        item={item}
                        key={index}
                    />
                ))}
        </div>
    );
};
