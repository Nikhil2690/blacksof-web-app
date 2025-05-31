'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'

export default function FadeInVideo() {
  const videoRef = useRef(null)

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }, [inView])

  return (
    <div ref={ref} className="flex justify-center items-center bg-black h-[30rem] w-[40rem]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl"
      >
        <video
          ref={videoRef}
          src="/Passenger_Alpha.mp4"
          muted
          playsInline
          className="w-full rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  )
}
