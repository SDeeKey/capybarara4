'use client';

import React, {useId} from 'react';
import s from './input.module.scss';
import clsx from 'clsx';

type InputType = 'text' | 'password' | 'email' | 'phone';

interface InputProps {
    type: InputType;
    placeholder?: string;
    labelName?: string;
    required?: boolean;
    basicInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    error?: string;
}

export const Input = ({
      type,
      placeholder,
      labelName,
      required,
      basicInputProps,
      error
  }: InputProps) => {

    const uniqueId = useId();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (basicInputProps?.onChange) {
            basicInputProps.onChange(e);
        }
    };

    return (
        <div className={s['input-wrapper']}>
            {
                labelName && (
                    <label
                        htmlFor={uniqueId}
                        className={clsx(
                            s['input-wrapper__label'],
                            {[s['input-wrapper__label--error']]: error},
                            'body-3--normal'
                        )}
                    >
                        {
                            required ?
                                (labelName
                                    ? `${labelName}*`
                                    : '*')
                                : labelName
                        }
                    </label>
                )}
            <div className={s['input-wrapper__error-wrapper']}>
                <input
                    id={uniqueId}
                    className={clsx(
                        s['input-wrapper__input'],
                        {[s['input-wrapper__input--error']]: error},
                        'body-2--normal'
                    )}
                    type={type === 'phone' ? 'text' : type}
                    placeholder={type === 'phone' ? '+7(___)-___-__-__' : placeholder}
                    required={required}
                    maxLength={type === 'phone' ? 16 : undefined}
                    {...basicInputProps}
                    onChange={handleChange}
                />
                {
                    error &&
                    <span className={s['input-wrapper__error']}
                    >
                        {error}
                    </span>
                }
            </div>
        </div>
    );
};
