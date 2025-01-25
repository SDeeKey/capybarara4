import React, {ReactNode} from 'react';
import s from "./technologiesBlock.module.scss"
import clsx from "clsx";

type TechnologiesBlockProps = {
    image: ReactNode;
    title: string;
}

export const TechnologiesBlock = ({image, title}: TechnologiesBlockProps) => {
    return (
        <article className={s['technologies-items']}>
            {image}
            <h6 className={clsx(s['technologies-items__title'], 'body-1')}>
                {title}
            </h6>
        </article>
    );
};
