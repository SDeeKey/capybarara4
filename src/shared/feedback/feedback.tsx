import React from 'react';
import s from './feedback.module.scss';
import {FeedbackData} from "@/widgets/testimonials/feedbackData";
import Image from "next/image";
import clsx from "clsx";

interface TestimonialsProps {
    item: FeedbackData;
    className?: string;
    isFeedbackMain?: boolean;
    isFeedbackUpper?: boolean;
    onClick?: () => void;
}

export const Feedback = ({item, className, isFeedbackMain, isFeedbackUpper, onClick}: TestimonialsProps) => {
    return (
        <div
            className={clsx(
                s['feedback'],
                'shadow-md',
                className,
            )}
            onClick={onClick}
        >
            <div className={s['feedback__header']}>
                {
                    isFeedbackMain &&
                    <Image
                        src={item.img}
                        alt={'image'}
                        width={104}
                        height={104}
                    />
                }
                <h3 className={clsx(
                    s['feedback__header__name'],
                    `${isFeedbackMain ? 'heading-3' : 'subtitle'}--sb`,
                )}>
                    {item.name}
                    <span className={clsx(
                        s['feedback__header__post'],
                        `${isFeedbackMain ? 'subtitle' : 'body-3'}--normal`,

                    )}
                      data-has-slash={!isFeedbackMain}
                    >
                       {!isFeedbackMain && '/'} {item.post}
                    </span>
                </h3>

            </div>
            <p className={clsx(
                s[`feedback__body${isFeedbackMain ? '' : isFeedbackUpper
                        ? '--first'
                        : '--second'}`],
                'body-2--normal'
            )}>
                {item.feedback}
            </p>
        </div>
    );
};
