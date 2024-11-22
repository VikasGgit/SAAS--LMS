"use client"
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const WelcomeBanner = () => {
    const {user}=useUser()
  return (
    <div className='flex items-center gap-6 text-white bg-blue-500 rounded-md' >
        <Image width={100} height={100} src={"/laptop.png"} alt='Wecome' />
        <div>
            <h2 className='text-3xl font-bold' >Hello, {user?.fullName} </h2>
            <p>Welcome can and continue your learning Journey</p>
        </div>
    </div>
  )
}

export default WelcomeBanner