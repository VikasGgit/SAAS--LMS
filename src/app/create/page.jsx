"use client";

import React, { useState } from "react";
import SelectOption from "./_components/SelectOption";
import { Button } from "@/components/ui/button";
import TopicInput from "./_components/TopicInput";
import { db } from "../../../configs/db";
import { STUDY_TABLE_MATERIAL } from "../../../configs/schema";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";


const Create = () => {
  const router=useRouter()
  const {user}=useUser()
  const [formdata, setFormData] = useState([]);
  const [loading, setLoading]=useState(false);
  const [step, setStep] = useState(0);
  const handleUserInput = (fieldName, fieldValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: fieldValue,
    }));
  };
  
  console.log("formData", formdata)
  
  

  const generateCourse = async () => {
setLoading(true);
    const courseId = uuidv4();
    console.log("Generated Course ID:", courseId);
    console.log("Form Data:", formdata);
    console.log("Created By (User Email):", user?.primaryEmailAddress?.emailAddress);
    const topic=formdata.Topic;
      
      const courseType=formdata.courseType;
      const Difficulty=formdata.Difficulty;
    if(!topic || !courseType || !Difficulty ) {
  
      alert("Please fill all the fields");
      return;
    }
    const result = await axios.post('/api/generate-course-content', {
        courseId: courseId,
        ...formdata,
        createdBy: user?.primaryEmailAddress?.emailAddress
    });
    setLoading(false);

    console.log("Response from Backend:", result);
    router.replace('/dashboard')
};

  

  return (
    <div className="flex flex-col items-center p-5 mt-20 md:px-24 lg:px-36">
      <h2 className="text-4xl font-bold text-primary">
        Start Building your own content
      </h2>
      <p className="text-xl text-gray-500 ">
        Please fill all the content to generate the content
      </p>

      <div className="mt-20">
        {step == 0 ? (
          <SelectOption
            selectedStydyType={(value) => handleUserInput("courseType", value)}
          />
        ) : (
          <TopicInput
            selectedDifficulty={(value) => handleUserInput("Difficulty", value)}
            selectedTopic={(value) => handleUserInput("Topic", value)}
          />
        )}
      </div>
      <div className="flex justify-between w-full mt-10">
        {step ? (
          <Button onClick={() => setStep(step - 1)} variant="outline">
            Prev
          </Button>
        ) : null}
        {step == 0 ? (
          <Button onClick={() => setStep(step + 1)}>Next</Button>
        ) : (
          <Button  onClick={generateCourse} >
            {loading ? <Loader/>:"Generate"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Create;
