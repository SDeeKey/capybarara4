'use client'

import s from './annoyingMessage.module.scss';
import Image, {StaticImageData} from "next/image";
import CloseButton from '@/img/hamburgerMenuClose.svg';
import clsx from "clsx";
import {useEffect, useState} from "react";

type AnnoyingMessageProps = {
    ImagePath: StaticImageData;
    className?: string;
}

export const AnnoyingMessage = ({ImagePath, className}: AnnoyingMessageProps) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(true);
        }, 120000);

        return () => clearInterval(interval);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={clsx(
            s['annoyingMessage'],
            className,
        )}>
            <Image
                src={ImagePath}
                alt={'annoyingMessage'}
                width={410}
                height={262}
                className={s['annoyingMessage__img']}
            />
            <CloseButton className={s['annoyingMessage__close']} onClick={handleClose}/>
        </div>
    );
};
