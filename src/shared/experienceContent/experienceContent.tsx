import React from 'react';
import s from './experienceContent.module.scss';
import clsx from "clsx";
import {ExperienceContentDesktop} from "@/entities/experienceContent-desktop/experienceContent-desktop";
import {ExperienceContentMobile} from "@/entities/experienceContent-mobile/experienceContent-mobile";

type ExperienceProps = {
    className?: string;
};

export const ExperienceContent = ({className}: ExperienceProps) => {

    return (
        <div className={clsx(s['experience-content'], className)}>
            <ExperienceContentMobile
                className={
                s['experience-content-mobile']
            }/>
            <ExperienceContentDesktop
                className={
                s['experience-content-desktop']
            }/>
        </div>
    );
};
