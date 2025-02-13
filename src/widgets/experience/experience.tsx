import React from 'react';
import s from './experience.module.scss'
import clsx from "clsx";
import leftOrange from '@/img/leftOrange.png'
import middleOrange from '@/img/middleOrange.png'
import rightOrange from '@/img/rightOrange.png'
import Image from "next/image";
import {ExperienceContent} from "@/shared/experienceContent/experienceContent";

export const Experience = () => {
    return (
        <section className={clsx(
            s['experience'],
            'section-wrapper',
        )}
        id={'experience'}
        >
            <div className={s['experience__text-block']}>
                <h1 className={'heading-1'}
                >
                    Experience
                </h1>
                <p className={clsx(
                    s['subtitle'],
                    'subtitle--normal'
                )}>
                    Here is a quick summary of Capibarara most recent experiences:
                </p>
            </div>
            <ExperienceContent
                className={s['experience__content']}
            />
            <Image className={
                s['experience__left-orange']}
                src={leftOrange}
                alt={'orange'}
            />
            <Image className={
                s['experience__middle-orange']}
                src={middleOrange}
                alt={'orange'}
            />
            <Image className={
                s['experience__right-orange']}
                src={rightOrange}
                alt={'orange'}
            />
        </section>
    );
};
