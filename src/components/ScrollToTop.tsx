
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {isVisible && (
        <div className='fixed bottom-0 right-0 p-4 flex flex-col items-center gap-2 z-50'>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary hover:bg-primary-hover text-white shadow-lg z-50"

          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>

      )}
    </>
  )
}

export default ScrollToTop