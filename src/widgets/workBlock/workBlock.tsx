import React from 'react';
import s from './workBlock.module.scss'
import {WorkTagBlock} from "@/shared/workTagBlock/workTagBlock";
import Image from "next/image";
import clsx from "clsx";
import {LinkIcon} from "@/shared/ui-kit/linkIcon/linkIcon";
import {WorkItemDto} from "@/entities/work/workItemDto";
import {baseApi} from "@/entities/globalConfig";

interface WorkBlockProps {
    item: WorkItemDto;
    position: 'left' | 'right';
}

export const WorkBlock = ({item, position}: WorkBlockProps) => {
    const imageUrl = `${baseApi.defaults.baseURL}/assets/${item.imageFileName}`;

    return (
        <div className={clsx(
            s['work-block'],
            s[`work-block--${position}`],
            'shadow-md'
        )}>
            <div className={s['work-block__image-block']}>
                <Image
                    src={imageUrl}
                    alt={'image'}
                    width={336}
                    height={336}
                    object-fit={'cover'}
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
                    {item.subtitle}
                </p>
                <p className={clsx(
                    s['work-block__text--description'],
                    'body-2--normal')}
                >
                    {item.description}
                </p>
                <WorkTagBlock
                    tags={item.technologies}
                />
                <LinkIcon
                    link={'https://capybarafacts.com'}
                    size={'md'}
                />
            </div>
        </div>
    );
};
