import { UserButton } from '@clerk/nextjs'
import React from 'react'

const HeaderComponent = () => {
  return (
    <div className='w-full p-5 text-white shadow-md justify-items-end'>
      <UserButton/>
    </div>
  )
}

export default HeaderComponent