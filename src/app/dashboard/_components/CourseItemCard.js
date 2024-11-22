import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React from 'react'

const CourseItemCard = ({course}) => {
  return (
    <div className='p-3 border rounded-md shadow-md' >
        <div>
        <div className='flex items-center justify-between' >
            <Image src={'/knowledge.png'} width={50} height={50} alt={course?.courseType} />
            <h2 className='text-[10px] p-1' >20 Dec 2024</h2>
        </div>
        <h2 className='mt-2 text-lg font-medium' >{course?.topic}</h2>
        <p className='text-sm text-gray-500 line-clamp-2'>{course?.courseLayout?.courseSummary}</p>
        <div className='mt-3' >
          <Progress value={10}/>
        </div>
        <div className="flex justify-end mt-3">
          <Button  >
            View 
          </Button>
        </div>
        </div>
    </div>
  )
}

export default CourseItemCard