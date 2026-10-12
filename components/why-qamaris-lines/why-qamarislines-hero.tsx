'use client'

import { useRef, useState } from 'react'
import {
  Globe2,
  Handshake,
  ShieldCheck,
  Volume2,
  VolumeX,
} from 'lucide-react'

const features = [
  { label: 'Our Reliability', icon: ShieldCheck },
  { label: 'Our Network', icon: Globe2 },
  { label: 'Our Commitment', icon: Handshake },
]

export default function WhyQamarisLinesHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [hasVideoError, setHasVideoError] = useState(false)

  const toggleSound = async () => {
    const video = videoRef.current
    if (!video) return

    if (video.muted) {
      video.muted = false
      setIsMuted(false)
      try {
        await video.play()
      } catch {
        video.muted = true
        setIsMuted(true)
      }
      return
    }

    video.muted = true
    setIsMuted(true)
  }

  return (
    <main className="relative isolate flex min-h-[100svh] w-full overflow-hidden bg-[#2B3386] text-white">
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/placeholder.jpg"
        onError={() => setHasVideoError(true)}
        aria-hidden="true"
      >
        <source src="/videos/qamarislines-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-10 bg-[#2B3386]/1" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(13,18,66,0.30)_0%,rgba(43,51,134,0.12)_50%,rgba(16,22,72,0.25)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(linear-gradient(180deg,rgba(8,12,45,0.08)_0%,transparent_45%,rgba(8,12,45,0.35)_100%)]"
        aria-hidden="true"
      />
      {hasVideoError && (
        <div className="absolute inset-0 -z-10 bg-[#2B3386]" aria-hidden="true" />
      )}

      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? 'Turn on background video sound' : 'Mute background video'}
            aria-pressed={!isMuted}
            className="inline-flex size-12 items-center justify-center rounded-full border border-white/35 bg-[#10174d]/50 text-white backdrop-blur-md transition hover:border-[#EF7120] hover:text-[#EF7120] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EF7120] sm:size-14"
          >
            {isMuted ? <VolumeX className="size-5 sm:size-6" /> : <Volume2 className="size-5 sm:size-6" />}
            <span className="sr-only">{isMuted ? 'Sound off' : 'Sound on'}</span>
          </button>
        </div>

        <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center py-16 text-center sm:py-20 lg:py-24">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.38em] text-[#EF7120] sm:mb-8 sm:text-sm sm:tracking-[0.48em]">
            Why Qamaris Lines
          </p>
          <h1 className="max-w-4xl text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white">
            <span className="block">Why Choose</span>
            <span className="mt-3 block font-light tracking-[-0.08em] sm:mt-5">
              QAMARIS LINES?
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-base font-medium leading-relaxed text-[#E8EAF7] sm:mt-10 sm:text-lg lg:text-xl">
            To keep your business moving and your global trade connected.
          </p>
        </section>

        <div className="grid w-full grid-cols-1 gap-7 border-t border-white/20 pt-7 sm:grid-cols-3 sm:gap-4 sm:pt-8">
          {features.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4 sm:flex-col sm:gap-3 sm:text-center">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/5 text-white backdrop-blur-sm transition-colors group-hover:border-[#EF7120] sm:size-16">
                <Icon className="size-5 sm:size-6" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="text-sm font-medium tracking-wide text-white/90 sm:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

/* Add the supplied looping video at: public/videos/qamaris-hero.mp4 */
/* The temporary poster fallback can be replaced with: public/images/qamaris-hero-poster.jpg */
/* and the poster prop updated to /images/qamaris-hero-poster.jpg when available. */
