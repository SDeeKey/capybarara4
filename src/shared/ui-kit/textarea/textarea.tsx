'use client'

import React, {useId} from 'react';
import s from './textarea.module.scss'
import clsx from "clsx";

interface TextareaParams {
    labelName?: string;
    required?: boolean;
    placeholder?: string;
    textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    error?: string;
}

export const Textarea = ({
        labelName,
        required,
        placeholder,
        textareaProps,
        error
    }: TextareaParams) => {

    const uniqueId = useId();

    return (
        <div className={s['textarea-wrapper']}>
            {
                labelName &&
                <label
                    htmlFor={uniqueId}
                    className={clsx(
                        s['textarea-wrapper__label'],
                        {[s['textarea-wrapper__label--error']]: error},
                        'body-3--normal'
                    )}
                >
                    <span>{labelName}</span>
                    {required && <span>*</span>}
                </label>
            }
            <div className={s['textarea-wrapper__error-wrapper']}>
                <textarea
                    id={uniqueId}
                    className={clsx(
                        s['textarea-wrapper__textarea'],
                        {[s['textarea-wrapper__textarea--error']]: error},
                        'body-2--normal'
                    )}
                    placeholder={placeholder}
                    required={required}
                    {...textareaProps}
                />
                {
                    error &&
                    <span className={s['textarea-wrapper__error']}>
                        {error}
                    </span>
                }
            </div>
        </div>
    );
};
