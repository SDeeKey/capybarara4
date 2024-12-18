'use client';

import React, {useState, useId} from 'react';
import s from './input.module.scss';
import clsx from 'clsx';

type InputType = 'text' | 'password' | 'email' | 'phone';

interface InputProps {
    type: InputType;
    placeholder?: string;
    labelName?: string;
    required?: boolean;
}

export const Input = ({type, placeholder, labelName, required}: InputProps) => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');

    const uniqueId = useId();

    const validateInput = (value: string) => {
        switch (type) {
            case 'email':
                return value.includes('@') && value.includes('.') && value.length <= 254 ? true : 'Enter a correct email';
            case 'phone':
                return value.length >= 10 && value.length <= 17 ? true : 'Enter a correct phone number';
            case 'password':
                if (value.length < 8) {
                    return 'The password must contain at least 8 characters';
                }
                if (!/[a-z]/.test(value) || !/[A-Z]/.test(value)) {
                    return 'Password must contain upper and lower case letters'
                }
                if (!/\d/.test(value)) {
                    return 'Password must contain at least 1 digit';
                }
                break;
            default:
                return true;
        }
    };

    const formatPhoneNumber = (input: string) => {
        // Оставляем только цифры, +, (, ) и -
        const cleaned = input.replace(/[^0-9+()\-]/g, '');

        // Форматируем номер в соответствии с шаблоном
        const match = cleaned.match(/^(\+?7)?(0?(\d{3})(\d{3})(\d{2})(\d{2}))$/);
        if (match) {
            const [, , , areaCode, firstPart, secondPart, thirdPart] = match;
            return `+7(${areaCode})-${firstPart}-${secondPart}-${thirdPart}`;
        }
        return cleaned; // Если не совпадает, возвращаем очищенный ввод
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        let formattedValue = inputValue;

        // Форматируем значение только для телефонного поля
        if (type === 'phone') {
            formattedValue = formatPhoneNumber(inputValue);
        }

        setValue(formattedValue);
        const validationMessage = validateInput(formattedValue);
        setError(typeof validationMessage === 'string' ? validationMessage : '');
    };

    return (
        <div className={s['input-wrapper']}>
            {
                labelName &&
                <label
                    htmlFor={uniqueId}
                    className={clsx(s['input-wrapper__label'], {[s['input-wrapper__label--error']]: error})}
                >
                    {required ? (labelName ? `${labelName}*` : '*') : labelName}
                </label>
            }
            <div className={s['input-wrapper__error-wrapper']}>
                <input
                    id={uniqueId}
                    className={clsx(s['input-wrapper__input'], {[s['input-wrapper__input--error']]: error})}
                    type={type === 'phone' ? 'text' : type}
                    value={value}
                    onChange={handleChange}
                    placeholder={type === 'phone' ? '+7(___)-___-__-__' : placeholder}
                    required={required}
                    maxLength={type === 'phone' ? 17 : undefined}
                />
                {
                    error &&
                    <span className={s['input-wrapper__error']}>
                        {error}
                    </span>
                }
            </div>
        </div>
    );
};
