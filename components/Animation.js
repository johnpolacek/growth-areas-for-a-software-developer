import React from "react"
import useTweenLite from "./useTweenLite"
import { gsap, Power4, CSSPlugin } from "gsap"

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)

const Arrow = (props) => {
  const endX = Math.floor(props.i / 5) * 5 - 48 + Math.random() * 2
  const endY = (props.i % 5) * 12.5 + Math.random() * 10 - 4
  const startX = endX - 10
  const startY = endY + 20

  const [tweenRef] = useTweenLite(0.5 + Math.random() * 25, {
    startAt: { x: startX + "vw", y: startY + "vh" },
    x: endX + "vw",
    opacity: 1,
    y: endY + "vh",
    ease: Power4.easeOut,
    delay: 1 + Math.random(),
  })

  return (
    <div
      style={{
        transform: "rotate(-45deg)",
        color: "var(--shade2)",
        opacity: 0,
        position: "absolute",
        fontSize: 40 + Math.random() * 80 + "px",
      }}
      ref={tweenRef}
    >
      ➟
    </div>
  )
}

const Animation = () => (
  <>
    {[...Array(100).keys()].map((i) => (
      <Arrow key={"arrow" + i} i={i} />
    ))}
  </>
)

export default Animation
