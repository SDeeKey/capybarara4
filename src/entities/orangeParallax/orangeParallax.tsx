'use client';

import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import s from './orangeParallax.module.scss';
import Orange from '@/img/orangeEmoji.svg';

type contactsProps = {
    className?: string;
};

export const OrangeParallax = ({ className }: contactsProps) => {
    const [positions, setPositions] = useState(
        Array.from({ length: 14 }, () => ({ x: 0, y: 0 }))
    );

    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = containerRef.current;

        if (!container) return;
        // Если ссылка на контейнер отсутствует (например, элемент еще не отрендерился), выходим из функции.

        // Получаем размеры и позицию контейнера относительно экрана.
        const { width, height, left, top } = container.getBoundingClientRect();

        // Вычисляем координаты мыши относительно центра контейнера.
        const mouseX = e.clientX - left - width / 2;
        const mouseY = e.clientY - top - height / 2;

        // Обновляем позиции всех апельсинов на основе положения мыши.
        const newPositions = positions.map(() => ({
            x: (mouseX / width) * 30,
            y: (mouseY / height) * 30,
        }));

        setPositions(newPositions);
    };

    return (
        <div
            ref={containerRef}
            className={clsx(
                s['orangeParallax'],
                className
            )}
            onMouseMove={handleMouseMove}
        >
            {
                Array.from({ length: 14 }, (_, index) => (
                <div
                    key={index}
                    className={clsx(
                        s['orangeParallax__orange'],
                        s[`orangeParallax__orange--${index}`]
                    )}
                    style={{
                        transform: `translate(${positions[index].x}px, ${positions[index].y}px)`,
                    }}
                >
                    <Orange />
                </div>
            ))}
        </div>
    );
};
