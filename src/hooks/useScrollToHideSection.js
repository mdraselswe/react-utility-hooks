import { useEffect, useState } from 'react'

const useScrollToHideSection = (sectionId, fixedId) => {
  const [hideFixedSection, setHideFixedSection] = useState < boolean > false

  useEffect(() => {
    const handleScroll = () => {
      const hideSectionSection = document.getElementById(sectionId)
      const fixedSection = document.getElementById(fixedId)

      if (hideSectionSection && fixedSection) {
        const hideSectionTop = hideSectionSection.getBoundingClientRect().top
        const fixedSectionTop = fixedSection.getBoundingClientRect().top
        const fixedSectionHeight = fixedSection.getBoundingClientRect().height

        if (fixedSectionTop + fixedSectionHeight > hideSectionTop) {
          setHideFixedSection(true)
        } else {
          setHideFixedSection(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionId, fixedId])

  return { hideFixedSection }
}

export default useScrollToHideSection
