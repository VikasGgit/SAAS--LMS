import { eq } from "drizzle-orm";
import { db } from "../../../../configs/db";
import { STUDY_TABLE_MATERIAL } from "../../../../configs/schema";
import { NextResponse } from "next/server";


export async function POST(req){
    const {createdBy}= await req.json();
    console.log("createdBy Email",createdBy);   
    const result = await db.select().from(STUDY_TABLE_MATERIAL)
                .where(eq(STUDY_TABLE_MATERIAL.createdBy,createdBy));
        
                return NextResponse.json({result: result});
}