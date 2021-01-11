/**
 * Handle Localstorage
 */
import { useState, useEffect } from "react"

export const useLocalStorage = (
    key: string,
    initialValue?: undefined
) => {
    const [state, setState] = useState<any>(
        /**
    * A task that can handle undefined params
    */
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

    /**
    * A task for create or set localstrorge 
    */

    useEffect(() => {
        if (state) {
            try {
                localStorage.setItem(key, JSON.stringify(state))
            } catch (error) {
                console.log(error)
            }
        }

    }, [state, key])

    return [state, setState]
}