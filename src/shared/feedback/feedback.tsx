import React from 'react';
import s from './feedback.module.scss';
import {FeedbackData} from "@/widgets/testimonials/feedbackData";
import Image from "next/image";
import clsx from "clsx";

interface testimonialsProps {
    item: FeedbackData;
    className?: string;
    isFeedback1?: boolean;
    isFeedback2?: boolean;
    onClick?: () => void;
}

export const Feedback = ({item, className, isFeedback1, isFeedback2, onClick}: testimonialsProps) => {
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
                    isFeedback1 &&
                        <Image
                            src={item.img}
                            alt={'image'}
                            width={104}
                            height={104}
                        />
                    }
                {
                    !isFeedback1 ?
                        <h3 className={clsx(
                            s['feedback__header__name'],
                            'subtitle--sb'
                        )}>
                            {item.name}
                            <span className={clsx(
                                s['feedback__header__post'],
                                'body-3--normal'
                            )}>
                            / {item.post}
                        </span>
                        </h3>
                        :
                        <div>
                            <h3 className={clsx(
                                s['feedback__header__name'],
                                'heading-3--sb'
                            )}>
                                {item.name}
                            </h3>
                            <span className={clsx(
                                s['feedback__header__post'],
                                'subtitle--normal'
                            )}>
                            {item.post}
                        </span>
                        </div>
                }
            </div>
            {
                isFeedback1 ?
                    <p className={clsx(
                        s['feedback__body'],
                        'body-2--normal'
                    )}>
                        {item.feedback}
                    </p>
                    :
                    isFeedback2 ?
                        <p className={clsx(
                            s['feedback__body--first'],
                            'body-2--normal'
                        )}>
                            {item.feedback}
                        </p>
                        :
                        <p className={clsx(
                            s['feedback__body--second'],
                            'body-2--normal'
                        )}>
                            {item.feedback}
                        </p>

            }
        </div>
    );
};
