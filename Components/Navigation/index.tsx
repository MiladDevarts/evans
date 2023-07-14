"use client"

import Image from 'next/image'
import HamburgerNav from '../Hamburger'

const Navigation = () => {
    return (
        <nav className='my-52 flex justify-between items-center px-6'>
            <Image width={150} height={100} src={'/logo.svg'} alt={'logo'} />
            <HamburgerNav />
        </nav>
    )
}

export default Navigation