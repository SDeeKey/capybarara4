'use client';

import React from 'react';
import s from './contactsForm.module.scss';
import {Input} from '@/shared/ui-kit/Input/input';
import {Textarea} from '@/shared/ui-kit/textarea/textarea';
import {Button} from '@/shared/ui-kit/button/button';
import {useForm} from 'react-hook-form';
import clsx from 'clsx';
import {UserDataDto} from "@/entities/userData/userDataDto";
import {sendUserData} from "@/entities/userData/userData";

export const ContactsForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        trigger,
        formState: {errors},
    } = useForm<UserDataDto>();

    const onSubmit = async (data: UserDataDto) => {
        try {
            // Вызываем функцию отправки данных
            const response = await sendUserData(data);
            console.log('Данные успешно отправлены:', response);
            // здесь вы можете добавить логику уведомления пользователя,
            // например, показать тост или сбросить форму
        } catch (error) {
            console.error('Ошибка отправки данных:', error);
        }
    };

    const formatPhoneNumber = (input: string) => {
        const cleaned = input.replace(/[^0-9]/g, '');
        const match = cleaned.match(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);

        if (match) {
            const [, countryCode, areaCode, firstPart, secondPart, thirdPart] = match;
            let formatted = `+${countryCode}`;
            if (areaCode) formatted += `(${areaCode}`;
            if (firstPart) formatted += `)${firstPart}`;
            if (secondPart) formatted += `-${secondPart}`;
            if (thirdPart) formatted += `-${thirdPart}`;
            return formatted;
        }
        return input;
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={clsx(
                s['contacts-form'],
                'shadow-lg'
            )}
        >
            <Input
                type={"text"}
                required={true}
                labelName={"Subject"}
                basicInputProps={{
                    ...register('subject', {
                        required: 'Subject is required',
                        maxLength:
                            {
                                value: 100,
                                message: 'Subject cannot be more than 100 characters'
                            },
                    }),
                    onChange: (e) => {
                        setValue('subject', e.target.value, {shouldValidate: true});
                        void trigger('subject');
                    },
                }}
                error={errors.subject?.message}
            />
            <Input
                type={"text"}
                required={true}
                labelName={"Name"}
                basicInputProps={{
                    ...register('name',
                        {
                            required: 'Name is required',
                            minLength:
                                {
                                    value: 2,
                                    message: 'Name must be at least 2 characters long'
                                },
                            maxLength:
                                {
                                    value: 50,
                                    message: 'Name cannot be more than 50 characters'
                                },
                        }),
                    onChange: (e) => {
                        setValue('name', e.target.value, {shouldValidate: true});
                        void trigger('name');
                    },
                }}
                error={errors.name?.message}
            />
            <Input
                type={"phone"}
                required={true}
                labelName={"Phone"}
                basicInputProps={{
                    ...register('phone',
                        {
                            required: 'Phone is required',
                            validate: (value) => {
                                const regex = /^\+\d\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
                                return regex.test(value) || 'Invalid phone number format';
                            },
                        }),
                    onChange: (e) => {
                        const formattedValue = formatPhoneNumber(e.target.value);
                        setValue('phone', formattedValue, {shouldValidate: true});
                    },
                }}
                error={errors.phone?.message}
            />
            <Textarea
                labelName={"Description"}
                textareaProps={{
                    ...register('description',
                    {
                        maxLength:
                            {
                                value: 500,
                                message: 'Description cannot be more than 500 characters'
                            },
                        minLength:
                            {
                                value: 10,
                                message: 'Description must be at least 10 characters long'
                            },
                    }),
                    onChange: (e) => {
                        setValue('description', e.target.value, { shouldValidate: true });
                        void trigger('description');
                    },
                }}
                error={errors.description?.message}
            />
            <Button
                title={"Send it!"}
                className={"body-2--medium"}
                type={"submit"}
            />
        </form>
    );
};
