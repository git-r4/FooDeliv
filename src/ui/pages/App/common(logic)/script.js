import { useEffect, useState } from 'react';

export const WindowResize = () => {
    const [mobileSize, setMobileSize] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 1024){
                setMobileSize(true);
            }else{
                setMobileSize(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [mobileSize]);

    return{
        mobileSize
    };
};