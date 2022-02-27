import React, { useEffect } from "react"

function useUnscroll(
  isOpened: boolean | undefined,
  globalState: { value: boolean }[]
) {
  useEffect(() => {
    const bodyElement = document.querySelector("body")
    const htmlElement = document.querySelector("html")
    if (isOpened || globalState?.some((item) => !!item.value)) {
      bodyElement?.classList.add("unscroll")
      htmlElement?.classList.add("unscroll")
    } else {
      bodyElement?.classList.remove("unscroll")
      htmlElement?.classList.remove("unscroll")
    }
  }, [isOpened, globalState?.some((item) => !!item.value)])
}

export default useUnscroll
