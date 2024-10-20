'use client';
import React, { Dispatch, SetStateAction } from "react";

export const useSessionStorage = <T>(key: string, initialValue: T):[T, Dispatch<SetStateAction<T>>] => {

    const getStoredValue = () => {
        const value = sessionStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
        return initialValue;
    }

    const [storedValue, setStoredValue] = React.useState<T>(getStoredValue);

    React.useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue as T, setStoredValue];
}