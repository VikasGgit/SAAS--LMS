import { NextResponse } from "next/server";
import { chatSession } from "../../../../configs/gemai";
import { STUDY_TABLE_MATERIAL } from "../../../../configs/schema";
import { db } from "../../../../configs/db";

export async function POST(req) {
    try {
        // Parse the request body
        const body = await req.json();
        const { courseId, courseType, Difficulty, Topic, createdBy } = body;

        // Construct the prompt using a template literal
        const PROMPT = `Generate a study material for ${Topic} for ${courseType} and level of difficulty will be ${Difficulty}. 
        Include:
        - Summary of the course
        - List of chapters with summaries for each chapter
        - Topic list in each chapter.
        Provide all results in JSON format.`;

        // Send the prompt to the chat session
        const courseRes = await chatSession.sendMessage(PROMPT);

        // Parse the response if it's a JSON string
        const responseText = await courseRes.response.text(); // Ensure this is correct for your library
        const parsedResponse = JSON.parse(responseText);

        console.log("Generated Course Content:", parsedResponse);

    
    const savetodb = await db
    .insert(STUDY_TABLE_MATERIAL)
    .values({
      courseId:courseId,
      courseType:courseType,
      topic:Topic,
      difficulty_level:Difficulty,
      courseLayout:parsedResponse,
      createdBy:createdBy
    })
    .returning({ resp: STUDY_TABLE_MATERIAL });
  console.log(savetodb);
  

        // Return the response
        return NextResponse.json({
            createdBy: createdBy,
            courseId: courseId,
            courseContent: parsedResponse
        });
    } catch (error) {
        console.error("Error Handling Request:", error);

        // Return an error response
        return NextResponse.json(
            { error: "Failed to process the request", details: error.message },
            { status: 500 }
        );
    }
}
