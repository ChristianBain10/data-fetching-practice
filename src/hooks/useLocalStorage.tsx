import { useEffect, useState } from "react";

function getSavedValue(key: string, initialValue: any) {
    if (localStorage.getItem(key)) {
        const savedValue = JSON.parse(localStorage.getItem(key) || '');
        if (savedValue) return savedValue;
    }

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}

export default function(key: string, initialValue: any) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}