'use client';

import React, {useEffect, useState} from 'react';
import s from './experienceContent.module.scss';
import {experienceDataItems} from "@/shared/experienceContent/experienceData";
import {DateAndDescription} from "@/entities/dateAndDescription/dateAndDescription";
import clsx from "clsx";

type ExperienceProps = {
    className?: string;
};

export const ExperienceContent = ({className}: ExperienceProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={clsx(s['experience-content'], className)}>
            {isMobile ? (
                // Mobile версия интерфейса
                <div className={clsx(s['experience-content__mobile'], 'shadow-md')}>
                    {experienceDataItems.map((item, index) => (
                        <div key={index}>
                            <div
                                className={s['experience-content__mobile--date']}
                                onClick={() => setActiveIndex(index)}
                            >
                                {item.date}
                            </div>
                            {activeIndex === index && (
                                <div className={clsx(s['experience-content__mobile--details'],
                                    'shadow-md')}>
                                    <DateAndDescription
                                        experience={item}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                // Desktop версия интерфейса
                <>
                    <div className={clsx(s['experience-content__dates'], 'shadow-md')}>
                        {experienceDataItems.map((item, index) => (
                            <div
                                className={s['experience-content__date']}
                                key={index}
                                onClick={() => setActiveIndex(index)}
                            >
                                {item.date}
                            </div>
                        ))}
                    </div>
                    <div className={clsx(s['experience-content__experience'], 'shadow-md')}>
                        {experienceDataItems.map((item, index) => (
                            activeIndex === index && (
                                <DateAndDescription
                                    key={index}
                                    experience={item}
                                />
                            )
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
