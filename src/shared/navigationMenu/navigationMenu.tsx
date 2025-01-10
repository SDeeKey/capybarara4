import React from 'react';
import {navigationItems} from "@/shared/navigationMenu/MenuItemsArray";

type NavigationMenuProps = {
    className?: string,
}

export const NavigationMenu = ({className}: NavigationMenuProps) => {
    return (
        <ul className={className}>
            {navigationItems.map((item, key) => (
                <li className='menu-link'
                    key={key}
                >
                    {item.menuItem}
                </li>
            ))}
        </ul>
    );
};
