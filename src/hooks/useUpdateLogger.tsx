import { useEffect } from "react";

export default function(value: any) {

    useEffect(() => {
        console.log(value);
    }, [value]);

}