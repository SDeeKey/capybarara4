'use client'

import React, {ReactNode, useEffect, useState} from 'react';
import s from './slider.module.scss';
import {TechnologiesBlock} from "@/shared/technologiesBlock/technologiesBlock";
import {technologies} from "@/shared/slider/sliderData";
import clsx from "clsx";

type Technology = {
    image: ReactNode;
    title: string;
};

type SliderProps = {
    className?: string;
    defaultItemsPerGroup: number;
};

export const Slider = ({className, defaultItemsPerGroup = 5}: SliderProps) => {
    const [itemsPerGroup, setItemsPerGroup] = useState(defaultItemsPerGroup);

    // Изменение количества элементов в группе при изменении размера экрана
    useEffect(() => {
        const updateItemsPerGroup = () => {
            if (window.innerWidth <= 768) {
                setItemsPerGroup(3);
            } else {
                setItemsPerGroup(defaultItemsPerGroup);
            }
        };
        updateItemsPerGroup();

        window.addEventListener('resize', updateItemsPerGroup);

        return () => window.removeEventListener('resize', updateItemsPerGroup);
    }, [defaultItemsPerGroup]);

    // Разделяем элементы на группы в зависимости от количества элементов на группу
    const groupedTechnologies = technologies.reduce((acc: Technology[][], tech, index) => {
        if (index % itemsPerGroup === 0) {
            acc.push([]);
        }
        acc[acc.length - 1].push(tech);
        return acc;
    }, []);
    return (
        <div className={clsx(s['slider'], className)}>
            <div className={s['slider__groups']}>
                {groupedTechnologies.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className={clsx(
                            s['slider__groups__group'],
                        )}
                    >
                        {group.map((tech, index) => (
                            <TechnologiesBlock
                                key={index}
                                image={tech.image}
                                title={tech.title}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
