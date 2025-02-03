'use client'

import React, {useState} from 'react';
import s from './experienceContentMobile.module.scss'
import {experienceDataItems} from "@/shared/experienceContent/experienceData";
import clsx from "clsx";
import {DateAndDescription} from "@/entities/dateAndDescription/dateAndDescription";

type ExperienceContentProps = {
    className?: string;
}

export const ExperienceContentMobile = ({className}: ExperienceContentProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className={clsx(
            s['experience-content-mobile'],
            className
        )}>
            {
                experienceDataItems.map((item, index) => (
                <div key={index}>
                    <div
                        className={clsx(
                            s['experience-content-mobile--date'],
                            index === activeIndex && s['active']
                        )}
                        onClick={() => setActiveIndex(index)}
                    >
                        {item.date}
                    </div>
                    {activeIndex === index && (
                        <div className={clsx(
                            s['experience-content-mobile--details'],
                            'shadow-md')}>
                            <DateAndDescription
                                experience={item}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
