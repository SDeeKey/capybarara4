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
                        Capybarara&nbsp;really&nbsp;good&nbsp;at:
                    </p>
                </div>
                <Slider defaultItemsPerGroup={5}/>
            </div>
            <Image className={s['skills__svg']} src={orange} alt={'orange'}/>
        </section>
    );
};
