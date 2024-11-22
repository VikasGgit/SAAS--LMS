import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SelectOption = ({selectedStydyType}) => {
  const options = [
    {
      name: "Exam",
      icon: "/exam.png",
    },
    {
      name: "Exam",
      icon: "/exam.png",
    },
    {
      name: "Exam",
      icon: "/exam.png",
    },
    {
      name: "Exam",
      icon: "/exam.png",
    },
    {
      name: "Exam",
      icon: "/exam.png",
    },
  ];
  const [selecteditem, setSelectedItem] = useState();
  return (
    <div>
      <h2>For which section you want to continue today</h2>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {options.map((option, index) => (
          <div
            onClick={() =>{ setSelectedItem(index);
                selectedStydyType(option.name)}}
            className={`flex flex-col items-center justify-center p-4 border cursor-pointer rounded-xl hover:border-primary ${
              selecteditem == index ? "border-primary" : null
            }`}
            key={index}
          >
            <Image src={option.icon} alt={option.name} width={50} height={50} />
            <h2>{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectOption;
