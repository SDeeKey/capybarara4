'use client'

import React, {useState} from 'react';
import s from "./testimonialsList.module.scss";
import {feedbackDataItem} from "@/widgets/testimonials/feedbackData";
import {Feedback} from "@/shared/feedback/feedback";
import clsx from "clsx";

export const TestimonialsList = () => {
    const [feedbackItems, setFeedbackItems] = useState(feedbackDataItem); // Храним порядок отзывов

    const handleClick = (index: number) => {
        // Сдвигаем массив: выбранный элемент становится первым, остальные за ним
        const reorderedItems = [
            ...feedbackItems.slice(index), // Элементы от выбранного до конца
            ...feedbackItems.slice(0, index) // Элементы от начала до выбранного
        ];
        setFeedbackItems(reorderedItems);
    };

    return (
        <div className={s['test']}>
            {
                feedbackItems.map((item, index) => (
                    <Feedback
                        key={index}
                        item={item}
                        isFeedback1={index === 0}
                        isFeedback2={index === 1}
                        onClick={() => handleClick(index)}
                        className={clsx(
                            s['feedback'],
                            s[`feedback--${index}`]
                        )}
                    />
                ))}
        </div>
    );
};
