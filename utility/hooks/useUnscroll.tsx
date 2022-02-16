import React, { useEffect } from "react"

function useUnscroll(isOpened: boolean) {
    useEffect(() => {
        const bodyElement = document.querySelector('body')

        if (isOpened) {
            bodyElement?.classList.add('overflow-hidden')
        } else {
            bodyElement?.classList.remove('overflow-hidden')
        }
        return () => {
            bodyElement?.classList.remove('overflow-hidden')
        }

    }, [isOpened])
}

export default useUnscroll