import { useState, useEffect } from "react"

export const useLocalStorage = (
    key: string,
    initialValue?: undefined
) => {
    const [state, setState] = useState<any>(
        () => {
            if (initialValue) return
            try {
                const value = localStorage.getItem(key);
                return value ? JSON.parse(value) : initialValue
            } catch (error) {
                return initialValue
            }
        }
    )

    useEffect(() => {
        if (state) {
            try {
                localStorage.setItem(key, JSON.stringify(state))
            } catch (error) {
                console.log(error)
            }
        }

    }, [state])

    return [state, setState]
}