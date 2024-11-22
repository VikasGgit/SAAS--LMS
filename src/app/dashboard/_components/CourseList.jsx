"use client"
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useEffect , useState} from 'react'
import CourseItemCard from './CourseItemCard'

const CourseList = () => {
  const [courses, setCourses]=useState([]);
const {user}=useUser();
    const getCourseList =async () =>{
        console.log( "userrrrrrrrrrrrr", user?.primaryEmailAddress?.emailAddress)
        const result=await axios.post("/api/courses", {createdBy:user?.primaryEmailAddress?.emailAddress} );
        console.log("course-list",result)
        setCourses(result.data.result);
    }
    useEffect(()=>{
        user&&getCourseList();
    },[user])

  return (
    <div className='mt-5' >
      <h2 className='text-3xl font-bold' >Your study material</h2>
      <div className='grid grid-cols-2 gap-4 mt-2 md:grid-cols-3 lg:grid-cols-4' >
        {courses.map((course, index)=>
        <CourseItemCard course={course} key={index} />
        )}
      </div>
    </div>
  )
}

export default CourseList