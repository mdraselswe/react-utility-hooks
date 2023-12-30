import { useEffect, useState } from 'react'

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('down')
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }

      setLastScrollTop(currentScrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])

  return scrollDirection
}

export default useScrollDirection
