import {useEffect} from "react";

export const useSomeHook = (): void => {
    useEffect(() => {
        setTimeout(() => {
            console.log("Use Some hook!")
        }, 3000)
    }, []);
}
