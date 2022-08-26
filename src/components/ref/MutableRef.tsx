import { useRef, useState, useEffect } from 'react'

const MutableRef = () => {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef<number | null>(null)

  const stopTimer = (id: number | null) => {
    if (id) {
      window.clearInterval(id)
    }
  }

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((prev) => prev + 1)
    }, 1000)

    return () => stopTimer(intervalRef.current)
  }, [])

  return <div>MutableRef</div>
}

export default MutableRef
