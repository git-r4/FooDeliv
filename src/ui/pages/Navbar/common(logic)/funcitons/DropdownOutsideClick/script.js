import { useState, useEffect } from 'react';

export const DropdownEffect = () => {
    const [dropdown, setDropdown] = useState(false);

    const toggleBtn = () => {
        setDropdown(dropdown => !dropdown);
    }

    useEffect(() => {
        if(dropdown){
            let dropdownBox = document.querySelector('#dropdownBox');

            let clickOutside = (e) => {
                //e.target !== dropdownBox
                if(!dropdownBox.contains(e.target)){
                    setDropdown(false);
                }
            }

            document.addEventListener('mousedown', clickOutside);
            return () => {
                document.removeEventListener('mousedown', clickOutside);
            }
        }
    }, [dropdown]);

    return{
        dropdown,
        toggleBtn
    }
};