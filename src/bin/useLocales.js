import {useEffect, useState} from "react";

export default function useLocales() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('locales/fa.json'
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )

            setData(await result.json());
        }

        fetchData();
    }, [])

    return data;
}
