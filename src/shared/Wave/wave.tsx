import React from 'react';
import BGWave from "@/img/bgWave.svg";
import FrontWave from "@/img/frontWave.svg";
import FirstOrange from "@/img/firstOrangeOnWave.svg";
import SecondOrange from "@/img/secondOrangeOnWave.svg";
import s from './wave.module.scss';
import clsx from "clsx";

type WaveProps = {
    className?: string;
}

export const Wave = ({className}: WaveProps) => {
    return (
        <div className={clsx(className, s.wave)}>
            <BGWave className={s['wave__background']} />
            <FrontWave className={s['wave__front']}/>
            <FirstOrange className={s['wave__first-orange']}/>
            <SecondOrange className={s['wave__second-orange']}/>
        </div>
    );
};