import React from 'react';
import s from './testimonials.module.scss'
import clsx from "clsx";
import {TestimonialsList} from "@/shared/test/testimonialsList";

export const Testimonials = () => {
    return (
        <section className={clsx(
            s['testimonials'],
            'section-wrapper'
        )}
        id={'testimonials'}
        >
            <div className={s['testimonials__wrapper']}>
                <h1 className={clsx(
                    s['title'],
                    'heading-1'
                )}>
                    Testimonials
                </h1>
                <p className={clsx(
                    s['subtitle'],
                    'subtitle--normal'
                )}>
                    Nice things people have said about me:
                </p>
            </div>
            <TestimonialsList/>
        </section>
    );
};
