'use client'

import React, {useEffect, useState} from 'react';
import s from './work.module.scss'
import clsx from "clsx";
import {WorkBlock} from "@/widgets/workBlock/workBlock";
import {WorkDto} from "@/entities/work/workDto";
import {getWorkData} from "@/entities/work/workApi";

export const Work = () => {
    const [workData, setWorkData] = useState<WorkDto | null>(null);

    useEffect(() => {
        const fetchWorkData = async () => {
            try {
                const data = await getWorkData();
                setWorkData(data);
            } catch (error) {
                console.error('Error get data', error);
            }
        };

        void fetchWorkData();
    }, []);

    if (!workData) {
        return <p>Loading...</p>;
    }

    return (
        <section className={clsx(
            s['work'],
            'section-wrapper'
        )}
                 id={'work'}
        >
            <div className={s['work__title-block']}>
                <h1 className={clsx(
                    s['title'],
                    'heading-1'
                )}>
                    {workData.title}
                </h1>
                <p className={clsx(
                    s['subtitle'],
                    'subtitle--normal'
                )}>
                    {workData.shortDescription}
                </p>
            </div>
            {
                workData.items.map((item, index) => (
                    <WorkBlock
                        item={item}
                        key={index}
                        position={index % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
        </section>
    );
};
