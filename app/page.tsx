"use client"

import OverlayMenu from '@/Components/OverlayMenu'
import { MenuContext } from "@/context/MenuProvider";
import { useContext } from 'react';

export default function Home() {

  let menuVisibility = useContext(MenuContext)

  return (
    <>
      {
        menuVisibility.menu && <OverlayMenu />
      }
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

      </main>
    </>
  )
}
