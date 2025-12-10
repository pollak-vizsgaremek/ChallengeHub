import React, { useState, useRef, useEffect } from 'react'
import './Music.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Music = () => {
  const [volumeLevel, setVolumeLevel] = useState(0) // 0: Muted, 1: Low, 2: High
  const audioRef = useRef(null)

  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    })

    if (audioRef.current) {
      audioRef.current.volume = 0
      audioRef.current.play().catch((e) => console.log('Autoplay blocked:', e))
    }
  }, [])

  const toggleVolume = () => {
    let newLevel
    if (volumeLevel === 0) newLevel = 2 // Muted -> High
    else if (volumeLevel === 2) newLevel = 1 // High -> Low
    else newLevel = 0 // Low -> Muted

    setVolumeLevel(newLevel)

    if (audioRef.current) {
      const volumes = [0, 0.3, 1.0]
      audioRef.current.volume = volumes[newLevel]
      if (newLevel > 0 && audioRef.current.paused) {
        audioRef.current.play().catch((e) => console.log('Play failed:', e))
      }
    }
  }

  const getVolumeIcon = () => {
    if (volumeLevel === 0) {
      // Muted Icon
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      )
    } else if (volumeLevel === 1) {
      // Low Volume
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      )
    } else {
      // High Volume
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      )
    }
  }

  return (
    <div
      className="music-container"
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="800"
    >
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      <div className="control-btn" title="Hangerő" onClick={toggleVolume}>
        {getVolumeIcon()}
      </div>
    </div>
  )
}

export default Music