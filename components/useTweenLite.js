// based on: https://github.com/johnlindquist/use-gsap

import { useRef, useEffect } from "react"
import { TweenLite } from "gsap"

const useTweenLite = (duration, options, onMount = true) => {
  let ref = useRef(null)
  useEffect(() => {
    TweenLite.to(ref.current, duration, options)
  }, [ref])

  return [ref]
}

export default useTweenLite
