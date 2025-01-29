import React from 'react';
import s from './dateAndDescription.module.scss';
import {ExperienceData} from "@/shared/experienceContent/experienceData";
import clsx from "clsx";

interface DateAndDescriptionProps {
    experience: ExperienceData;
}

export const DateAndDescription = ({experience}: DateAndDescriptionProps) => {
    return (
        <div className={s['dateAndDescription']}>
            {experience.image}
            <div className={s['dateAndDescription__wrapper']}>
                <p className={clsx(s['dateAndDescription__subtitle'], 'subtitle--sb')}>
                    {experience.title}
                </p>
                <ul className={clsx(s['dateAndDescription__list'], 'body-2--normal')}>
                    {experience.description.map((item, index) => (
                        <li key={index} className={s['dateAndDescription__item']}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
