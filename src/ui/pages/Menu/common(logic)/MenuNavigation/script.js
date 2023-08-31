//components
import { useState } from 'react';

export const MenuNavigation = () => {
    const [menuNav, setMenuNav] = useState('chicken');

    const onChangeNav = (selected) => {
        if(menuNav === selected){
            return;
        }else{
            setMenuNav(selected);
        }
    };

    return{
        menuNav,
        onChangeNav
    };
};


