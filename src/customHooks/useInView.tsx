import { useEffect, useRef, useState } from "react"

export default function useInView(threshold = 0.2): [ref: React.RefObject<HTMLInputElement | null>, isVisible: boolean] {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const ref = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => { setIsVisible(entry.isIntersecting) },
            { threshold }
        )

        if (ref.current) observe.observe(ref.current)

        return () => {
            if (ref.current) observe.unobserve(ref.current)
        }


    }, [threshold])

    return [ref, isVisible]
}
