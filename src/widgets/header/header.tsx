import React from 'react';
import s from './header.module.scss';
import Logo from '@/img/logo.svg';
import OpenMenuIcon from '@/img/hamburgerMenu.svg';
import CloseMenuIcon from '@/img/hamburgerMenuClose.svg';
import {NavigationMenu} from "@/shared/navigationMenu/navigationMenu";

export const Header = () => {
    return (
        <header className={s['header']}>
            <nav className={s['nav']}>
                <Logo/>
                <input type="checkbox" id={'check'} className={s['nav__checkbox']}/>
                <div className={s['nav__menu']}>
                    <div className={s['nav__header-block']}>
                        <div className={s['nav__logo']}>
                            <Logo/>
                        </div>
                        <label htmlFor={'check'} className={s['nav__close']}>
                            <CloseMenuIcon/>
                        </label>
                    </div>
                    <NavigationMenu className={s['nav__list']}/>
                </div>
                <label htmlFor={'check'} className={s['nav__open']}>
                    <OpenMenuIcon/>
                </label>
                <div className={s['nav__overlay']}/>
            </nav>
        </header>
    );
};
