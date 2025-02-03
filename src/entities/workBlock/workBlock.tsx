import React from 'react';
import s from './workBlock.module.scss'
import {WorkTagBlock} from "@/shared/workTagBlock/workTagBlock";
import {WorkItemData} from "@/widgets/work/workData";
import Image from "next/image";
import clsx from "clsx";
import {LinkIcon} from "@/shared/ui-kit/linkIcon/linkIcon";

interface WorkSectionProps {
    item: WorkItemData
}

export const WorkBlock = ({item}: WorkSectionProps) => {
    return (
        <div className={clsx(
            s['work-block'],
            item.position === 'left' ? s['leftBlock'] : s['rightBlock'],
            'shadow-md'
        )}>
            <div className={s['work-block__image-block']}>
                <Image
                    src={item.img}
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
                    {item.descriptionTitle}
                </p>
                <p className={clsx(
                    s['work-block__text--description'],
                    'body-2--normal')}
                >
                    {item.description}
                </p>
                <WorkTagBlock
                    tags={item.tags}
                />
                <LinkIcon
                    link={'https://capybarafacts.com'}
                    size={'md'}
                />
            </div>
        </div>
    );
};
