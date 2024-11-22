import React from 'react'
import Sidebar from './_components/Sidebar'
import HeaderComponent from './_components/HeaderComponent'

const DashboardLayout = ({children}) => {
  return (
    <div>
        <div className='fixed hidden md:w-64 md:block' >
            <Sidebar/>
        </div>
        <div>
            <div className='md:ml-64' >
                <HeaderComponent/>
                <div className='p-10' >
                    {children}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default DashboardLayout