import { useCallback } from 'react';

export const useHttp = () => {
    const request = useCallback (async (config) => {
        try{
            const response = await fetch(config.url, {
                method: config.method ? config.method : 'GET',
                body: config.body ? JSON.stringify(config.body) : null,
                headers: config.headers ? config.headers : {}
            });
            if(!response.ok){
                throw new Error(`Could not fetch: ${response.url}, error status: ${response.status}`)
            }
            const data = await response.json();
            return data;
        }catch(e){
            throw e.message();
        }
    }, []);
    return {
        request
    };
}