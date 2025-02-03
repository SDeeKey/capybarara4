'use client'

import React, {useState} from 'react';
import s from './experienceContentDesktop.module.scss'
import clsx from "clsx";
import {experienceDataItems} from "@/shared/experienceContent/experienceData";
import {DateAndDescription} from "@/entities/dateAndDescription/dateAndDescription";

type ExperienceContentProps = {
    className?: string;
}

export const ExperienceContentDesktop = ({className}: ExperienceContentProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className={clsx(s['experience-content-desktop'], className)}>
            <div className={clsx(s['experience-content-desktop--dates'], 'shadow-md')}>
                {experienceDataItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={clsx(
                            s['experience-content-desktop--date'],
                            index === activeIndex && s['active']
                        )}>
                        {item.date}
                    </div>
                ))}
            </div>
            <div className={clsx(s['experience-content-desktop--experience'], 'shadow-md')}>
                {experienceDataItems.map((item, index) => (
                    activeIndex === index && (
                        <DateAndDescription
                            key={index}
                            experience={item}
                        />
                    )
                ))}
            </div>
        </div>
    );
};
