import React from 'react';
import s from './skills.module.scss'
import clsx from "clsx";
import orange from '@/img/orange.png';
import {Slider} from "@/shared/slider/slider";
import Image from "next/image";

export const Skills = () => {
    return (
        <section className={clsx(s.skills, 'section-wrapper')}>
            <div className={s['skills__content']}>
                <div className={s['skills__content-text']}>
                    <h1 className={'heading-1'}>
                        Skills
                    </h1>
                    <p className={'subtitle--normal'}>
                        The skills, tools and technologies
                        <span className={s['skills__content-unbroken-line']}> Capybarara really good at:</span>
                    </p>
                </div>
                <Slider/>
            </div>
            <Image className={s['skills__svg']} src={orange} alt={'orange'}/>
        </section>
    );
};
