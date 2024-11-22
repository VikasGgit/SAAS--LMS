import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const TopicInput = ({selectedDifficulty,selectedTopic}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3' >
        <h2 className='text-2xl font-bold' >Write the topic for which you want to generate the study material</h2>
        <Textarea placeholder="Start typing here"
        onChange={(event)=>selectedTopic(event.target.value)}
         />
        <h2>Select Difficulty Level</h2>
        <Select onValueChange={(value)=>selectedDifficulty(value)} >
  <SelectTrigger className="w-[]">
    <SelectValue placeholder="Difficulty Level" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="easy">Easy</SelectItem>
    <SelectItem value="moderate">Moderate</SelectItem>
    <SelectItem value="hard">Hard</SelectItem>
  </SelectContent>
</Select>
 
    </div>
  )
}

export default TopicInput