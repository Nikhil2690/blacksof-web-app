'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollProgressLine({ targetRef }) {
  const defaultRef = useRef(null)
  const sectionRef = targetRef || defaultRef

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  if (!targetRef) {
    return (
      <section
        ref={sectionRef}
        className="relative flex items-center h-[140vh] px-10 bg-black"
      >
        <div className="relative h-full w-10 flex justify-center overflow-visible">
          <div className="w-[3px] bg-white/30 h-full absolute top-0" />

          <motion.div
            style={{ height: lineHeight }}
            className="w-[3px] bg-white absolute top-0 left-0"
          />
        </div>
      </section>
    )
  }

  return (
    <div className="relative h-full w-10 flex justify-center overflow-visible">
      <div className="w-[3px] bg-white/30 h-full absolute top-0" />

      <motion.div
        style={{ height: lineHeight }}
        className="w-[3px] bg-white absolute top-0 left-0"
      />
    </div>
  )
}