import React from 'react';
import s from'./navigationMenu.module.scss';
import {navigationItems} from "@/shared/navigationMenu/MenuItemsArray";
import clsx from "clsx";

type NavigationMenuProps = {
    className?: string,
};

export const NavigationMenu = ({className}: NavigationMenuProps) => {
    return (
        <ul className={className}>
            {navigationItems.map((item, key) => (
                <li
                    className={s['menu-link']}
                    key={key}
                >
                    <a href={item.anchor}
                       className={clsx(
                           s['menu-link__item'],
                           'body-2--medium'
                       )}>
                        {item.menuItem}
                    </a>
                </li>
            ))}
        </ul>
    );
};
