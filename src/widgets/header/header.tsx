import React from 'react';
import s from './header.module.scss';
import Logo from '@/img/Logo.svg';
import OpenMenuIcon from '@/img/hamburgerMenu.svg';
import CloseMenuIcon from '@/img/hamburgerMenuClose.svg';

export const Header = () => {
    return (
        <div className={s['header']}>
            <div className={s['nav']}>
                <Logo />
                <input type="checkbox" id='check' className={s['nav__checkbox']} />
                <div className={s['nav__menu']}>
                    <div className={s['nav__header-block']}>
                        <div className={s['nav__logo']}>
                            <Logo/>
                        </div>
                        <label htmlFor='check' className={s['nav__close']}>
                            <CloseMenuIcon/>
                        </label>
                    </div>
                    <ul className={s['nav__list']}>
                        <li className='menu-link'>Experience</li>
                        <li className='menu-link'>Work</li>
                        <li className='menu-link'>Testimonials</li>
                        <li className='menu-link'>Contact</li>
                    </ul >
                </div>
                <label htmlFor='check' className={s['nav__open']}>
                    <OpenMenuIcon/>
                </label>
                <div className={s['nav__overlay']}></div>
            </div>
        </div>
    );
};