'use client';
import React, {useEffect, useState} from 'react';
import s from './slider.module.scss';
import {TechnologiesBlock} from "@/shared/technologiesBlock/technologiesBlock";
import {technologies} from "@/shared/slider/sliderData";
import clsx from "clsx";

type SliderProps = {
    className?: string;
    defaultItemsPerGroup: 3 | 4 | 5;
};

export const Slider = ({className, defaultItemsPerGroup = 5}: SliderProps) => {
    const [currentGroup, setCurrentGroup] = useState(0);
    const [itemsPerGroup, setItemsPerGroup] = useState(defaultItemsPerGroup);

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

    const totalGroups = Math.ceil(technologies.length / itemsPerGroup);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGroup((prev) => (prev + 1) % totalGroups); // Переключение на следующую группу
        }, 2000); // Время переключения

        return () => clearInterval(interval); // Очистка интервала
    }, [totalGroups]);

    return (
        <div className={clsx(
            s.slider,
            className
        )}>
            <div className={clsx(
                s.slider__carousel,
                s['items-per-group']
            )}>
                <div className={clsx(
                    s.slider__group,
                    s[`slider__group--${currentGroup}`]
                )}>
                    {technologies.slice(
                        currentGroup * itemsPerGroup,
                        (currentGroup + 1) * itemsPerGroup)
                        .map((tech, key) => (
                            <TechnologiesBlock
                                key={key}
                                image={tech.image}
                                title={tech.title}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};
