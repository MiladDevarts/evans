"use client"

import Hero from "@/Components/Hero"
import OverlayMenu from "@/Components/OverlayMenu"

export default function Home() {

  return (
    <>
      <OverlayMenu />
      <main className="flex w-full flex-col items-center justify-start h-screen">
        <Hero />
      </main>
    </>
  )
}
