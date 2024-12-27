import React from 'react';
import {NavigationItems} from "@/shared/navigationMenu/MenuItemsArray";

type NavigationMenuProps = {
    className?: string,
}

export const NavigationMenu = ({className}: NavigationMenuProps) => {
    return (
        <ul className={className}>
            {NavigationItems.map((item, key) => (

                <li className='menu-link'
                    key={key}
                >
                    {item.menuItem}
                </li>
            ))}
        </ul>
    );
};
