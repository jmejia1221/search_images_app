import { useEffect, useState, FC } from "react";

interface debounceProps {
    value: any,
    delay?: number
}

const useDebounce: FC<debounceProps> = (value, delay): any => {
    const [debounceValue, setDebouncedValue] = useState<any>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500)
        return () => {
            clearTimeout(timer);
        }
    }, [value, delay])

    return debounceValue;
}

export default useDebounce;