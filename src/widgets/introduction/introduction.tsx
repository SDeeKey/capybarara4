import React from 'react';
import {Button} from "@/shared/ui-kit/button/button";
import s from './introduction.module.scss'
import Capybara from '@/img/capybara.svg'
import {Wave} from "@/shared/Wave/wave";
import clsx from "clsx";

export const Introduction = () => {
    return (
        <section className={clsx(
            s['introduction'],
            'section-wrapper'
        )}>
            <div className={s['introduction__wrapper']}>
                <div className={s['introduction__text-block-wrapper']}>
                    <div className={s['introduction__text-block']}>
                        <h1 className={'heading-1'}>
                            Hi, I’m Capybarara&nbsp;👋
                        </h1>
                        <h3 className={clsx(
                            s['introduction__description'],
                            'body-2--normal'
                        )}>
                            Known for its adorable appearance and friendly nature, the Capybarara is now embarking on a
                            journey to find a new job. Motivated by the desire to explore new opportunities and
                            challenges,
                            the Capybarara is determined to utilize its unique skills and traits to secure a fulfilling
                            position!
                        </h3>
                    </div>
                    <div className={s['introduction__image-between']}>
                        <Capybara/>
                    </div>
                    <Button title={'I WANNA EMPLOY YOU!!!!'}
                            className={s['introduction__btn']}
                            href={'#getInTouch'}
                    />
                </div>
                <div className={s['introduction__image']}>
                    <Capybara/>
                </div>
            </div>
            <Wave className={s['introduction__wave-wrapper']}/>
        </section>
    );
};
