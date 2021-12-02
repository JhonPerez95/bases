import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useEffect } from 'react'

export const useCounter = ({ maxCount = 1, initialState = 5 }) => {
    const [counter, setCounter] = useState(initialState)
    const elementToAnimate = useRef<HTMLHeadingElement>(null)
    const tl = useRef(gsap.timeline())
    const handleClick = () => {
        setCounter((pre) => Math.min(pre + 1, maxCount))
        // setCounter((pre) => (pre && pre < MAXIMUN_COUNT ? pre + 1 : pre))
    }
    useLayoutEffect(() => {
        if (!elementToAnimate.current) return

        tl.current
            .to(elementToAnimate.current, {
                y: -10,
                duration: 0.2,
                ease: 'ease.out',
            })
            .to(elementToAnimate.current, {
                y: 0,
                duration: 1,
                ease: 'bounce.out',
            })
            .pause()
    }, [])

    useEffect(() => {
        tl.current.play(0)
    }, [counter])

    return {
        counter,  
        handleClick,
        elementToAnimate,
    }
}
