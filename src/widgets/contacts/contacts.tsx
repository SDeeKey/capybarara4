import React from 'react';
import s from './contacts.module.scss'
import clsx from "clsx";
import {ContactsForm} from "@/shared/ContactsForm/contactsForm";
import {OrangeParallax} from "@/entities/orangeParallax/orangeParallax";

export const Contacts = () => {
    return (
        <section className={clsx(
            s['contacts'],
            'section-wrapper'
        )}
        id={'contacts'}
        >
            <div className={s['contacts__header']}>
                <h1 className={'heading-1'}>
                    Contact Capibarara
                </h1>
                <p className={'subtitle--normal'}>
                    Do you wanna chat with Capibarara? Then send the request!
                </p>
            </div>
            <ContactsForm/>
            <OrangeParallax className={s['orangeParallax']}/>
        </section>
    );
};
