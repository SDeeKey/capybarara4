import React from 'react';
import s from './workTagBlock.module.scss'
import {Tag} from "@/shared/ui-kit/tag/tag";

interface TagProps {
    tags: string[]
}

export const WorkTagBlock = ({tags}: TagProps) => {
    return (
        <div className={s['tags']}>
            {
                tags.map((tag, index) => (
                <Tag
                    key={index}
                    title={tag}
                />
            ))}
        </div>
    );
};
