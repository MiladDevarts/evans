import Image from 'next/image'
import React from 'react'

interface MobileProps {
    src: string;
}

const MobileScreen = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image src={''} width={229} height={447} alt={''} />
    </div>
  )
}

export default MobileScreen
