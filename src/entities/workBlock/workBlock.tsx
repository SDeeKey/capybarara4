import React from 'react';
import s from './workBlock.module.scss'
import {WorkTagBlock} from "@/shared/workTagBlock/workTagBlock";
import Image, {StaticImageData} from "next/image";
import clsx from "clsx";
import {LinkIcon} from "@/shared/ui-kit/linkIcon/linkIcon";

interface WorkSectionProps {
    img: StaticImageData,
    position: string,
    tags: string[],
    descriptionTitle: string,
    description: string;
}

export const WorkBlock = ({img, position, tags, descriptionTitle, description}: WorkSectionProps) => {
    return (
        <div className={clsx(
            s['work-block'],
            s[`work-block--${position}`],
            'shadow-md'
        )}>
            <div className={s['work-block__image-block']}>
                <Image
                    src={img}
                    alt={'image'}
                    className={clsx(
                        s['image'],
                        'shadow-lg'
                    )}
                />
            </div>
            <div className={s['work-block__text']}>
                <p className={clsx(
                    s['work-block__text--title'],
                    'subtitle--sb')}
                >
                    {descriptionTitle}
                </p>
                <p className={clsx(
                    s['work-block__text--description'],
                    'body-2--normal')}
                >
                    {description}
                </p>
                <WorkTagBlock
                    tags={tags}
                />
                <LinkIcon
                    link={'https://capybarafacts.com'}
                    size={'md'}
                />
            </div>
        </div>
    );
};
