import React, { Dispatch, SetStateAction, useState } from 'react';

export function useLocalStorage<T>(key: string, INITIAL_STATE: T): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key);
        try {
            return item ? JSON.parse(item) : INITIAL_STATE;
        } catch (e) {
            console.warn(`Error getting item from localStorage: ${key} `, e);
            return INITIAL_STATE;
        }
    });

    const setStateAndLocalStorage = (newValue: T | ((oldVal: T) => T)) => {
        try {
            const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
            localStorage.setItem(key, JSON.stringify(valueToStore));
            setValue(valueToStore);
        } catch (e) {
            console.warn(`Error setting item to localStorage: ${key} `, e);
        }
    };

    return [value, setStateAndLocalStorage];
};