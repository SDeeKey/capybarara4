'use client'

import {ChangeEvent, useState} from 'react';
import s from './textarea.module.scss'
import clsx from "clsx";

interface textareaParams {
    labelName?: string;
    required?: boolean;
    placeholder?: string;
}

export const Textarea = ( {labelName, required, placeholder}: textareaParams) => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');

    const validateTextarea = (value: string) => {
        return value.length <= 500 ? true : 'Character limit';
    }

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const textareaValue = event.target.value;
        setValue(textareaValue);
        const validationMessage = validateTextarea(textareaValue);
        setError(typeof validationMessage === 'string' ? validationMessage : '');
    }

    return (
        <div className={s['textarea-wrapper']}>

            {
                labelName &&
                <label
                    htmlFor="myTextarea"
                    className={clsx(s['textarea-wrapper__label'], {[s['textarea-wrapper__label--error']]: error})}
                >
                    {required ? (labelName ? `${labelName}*` : '*') : labelName}
                </label>
            }
            <div className={s['textarea-wrapper__error-wrapper']}>
                <textarea
                    id="myTextarea"
                    className={clsx(s['textarea-wrapper__textarea'], {[s['textarea-wrapper__textarea--error']]: error})}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder || 'Text'}
                    required = {required}
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
