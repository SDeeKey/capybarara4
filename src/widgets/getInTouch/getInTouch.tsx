"use client"

import React, { useState } from 'react';
import s from './getInTouch.module.scss';
import clsx from "clsx";
import Mail from '@/img/mailIcon.svg';
import Phone from '@/img/phoneIcon.svg';
import {TextWithColoredLetters} from "@/widgets/textWithColoredLetters/textWithColoredLetters";

export const GetInTouch = () => {
    const [isCopied, setIsCopied] = useState(false);
    const email = 'capibarara@gmail.com';
    const tel = '+8 800 200-59-20';

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <footer className={clsx(
            s['getInTouch'],
            'section-wrapper'
        )}>
            <div className={s['getInTouch__header']}>
                <h1 className={clsx(
                    s['title'],
                    'heading-1'
                )}>
                    Get In Touch
                </h1>
                <p className={clsx(
                    s['subtitle'],
                    'subtitle--normal'
                )}>
                    What’s next? Feel free to reach out to Capibarara
                    if you&apos;re looking for a developer, have a query, or simply want to connect.
                </p>
            </div>
            <div className={s['getInTouch__contacts']}>
                <div className={s['getInTouch__mail']}
                     onClick={() => copyToClipboard(email)}
                >
                    <Mail/>
                    <TextWithColoredLetters
                        text={email}
                        className={clsx(
                            s['mail'],
                            'heading-2'
                        )}
                    />
                </div>
                <div className={s['getInTouch__phone']}
                     onClick={() => copyToClipboard(tel)}
                >
                    <Phone/>
                    <TextWithColoredLetters
                        text={tel}
                        className={clsx(
                            s['phone'],
                            'heading-2'
                        )}
                    />
                </div>
            </div>
            {
                isCopied &&
                <div className={clsx(
                    s['getInTouch__notification'],
                    'body-2--normal'
                )}>
                    Текст успешно скопирован!
                </div>
            }
        </footer>
    );
};
