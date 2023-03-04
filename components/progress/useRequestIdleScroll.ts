import {useEffect, useRef} from "react";

function useRequestIdleScroll(handler: () => void) {
    const tickingRef = useRef(false);
    function requestTick() {
        if (!tickingRef.current) {
            requestIdleCallback(() => {
                handler();
                tickingRef.current = false;
            });
            tickingRef.current = true;
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', requestTick);
        return () => {
            document.removeEventListener('scroll', requestTick);
        };
    }, []);
}
export default useRequestIdleScroll
