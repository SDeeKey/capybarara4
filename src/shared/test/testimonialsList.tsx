'use client'

import React, {useEffect, useState} from 'react';
import s from "./testimonialsList.module.scss";
import {feedbackDataItem} from "@/widgets/testimonials/feedbackData";
import {Feedback} from "@/shared/feedback/feedback";
import clsx from "clsx";

export const TestimonialsList = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % feedbackDataItem.length);
        }, 5000);
        return () => clearInterval(interval);

    }, []);
    const reorderedItems = [
        ...feedbackDataItem.slice(currentIndex),
        ...feedbackDataItem.slice(0, currentIndex)
    ];
    return (
        <div className={s['testimonials-list']}>
            {reorderedItems.map((item, index) => (
                <Feedback
                    key={index}
                    item={item}
                    isFeedbackMain={index === 0}
                    isFeedbackUpper={index === 1}
                    className={clsx(
                        s['feedback'],
                        s[`feedback--${index}`]
                    )}
                />
            ))}
        </div>
    );
};
