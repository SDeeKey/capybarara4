import React from 'react';
import s from "./technologiesBlock.module.scss"
import clsx from "clsx";
import Image from "next/image";

type TechnologiesBlockProps = {
    image: string;
    title: string;
}

export const TechnologiesBlock = ({image, title}: TechnologiesBlockProps) => {
    return (
        <article className={s['technologies-items']}>
            <Image
                src={`${image}.svg`}
                // Здесь размер должен быть 64px, но тк я решил повыпендриваться и добавить анимацию
                // при наведении и картинки стали немного выходить за 100 пикселей родительского контейнера,
                // так что картинки чуть меньше, но с красивой анимцией.
                width={60}
                height={60}
                alt={image}
            />{/*Если интересно почему тут article и h6, а не div и p,
             то вот документация https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article*/}
            <h6 className={clsx(s.title, 'body-1')}>
                {title}
            </h6>
        </article>
    );
};
