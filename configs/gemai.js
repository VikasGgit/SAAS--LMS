import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyCKulf7luY80SVw8XGB_fa2_q6HwVb7MIs";
  const genAI = new GoogleGenerativeAI(apiKey);
  console.log(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

  export  const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a study material for Python for Exam and level of difficulty will be EASY with summary of course, List of Chapters along with summary for each chapter, Topic list in each chapter, All results in json"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"courseSummary\": \"This course provides an easy introduction to Python programming. It covers fundamental concepts and syntax, making it ideal for beginners preparing for an introductory Python exam.\", \"chapters\": [{\"chapterTitle\": \"Introduction to Python\", \"chapterSummary\": \"This chapter introduces the basics of Python, including its history, applications, and how to set up your programming environment.\", \"topics\": [\"What is Python?\", \"Why learn Python?\", \"Setting up Python environment\", \"Running your first Python code\", \"Basic Syntax\"]}, {\"chapterTitle\": \"Variables and Data Types\", \"chapterSummary\": \"This chapter explains different variable types and how to use them in Python.\", \"topics\": [\"Integers\", \"Floats\", \"Strings\", \"Booleans\", \"Variables\", \"Type Conversion\"]}, {\"chapterTitle\": \"Operators\", \"chapterSummary\": \"This chapter covers various operators in Python, enabling you to perform calculations and comparisons.\", \"topics\": [\"Arithmetic Operators\", \"Comparison Operators\", \"Logical Operators\", \"Assignment Operators\"]}, {\"chapterTitle\": \"Control Flow Statements\", \"chapterSummary\": \"This chapter explores conditional statements and loops, allowing you to control the flow of your programs.\", \"topics\": [\"if-else statements\", \"for loops\", \"while loops\", \"break and continue statements\"]}, {\"chapterTitle\": \"Data Structures\", \"chapterSummary\": \"This chapter introduces basic data structures in Python: lists and dictionaries.\", \"topics\": [\"Lists\", \"List Methods\", \"Dictionaries\", \"Dictionary Methods\"]}, {\"chapterTitle\": \"Functions\", \"chapterSummary\": \"This chapter explains how to create and use functions to organize your code.\", \"topics\": [\"Defining functions\", \"Function parameters\", \"Return values\", \"Scope\"]}, {\"chapterTitle\": \"Input and Output\", \"chapterSummary\": \"This chapter demonstrates how to get input from the user and display output.\", \"topics\": [\"Taking user input\", \"Printing output\", \"Formatting output\"]}]}\n\n```"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
