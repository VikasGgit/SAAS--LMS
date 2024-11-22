import { inngest } from "../../../inngest/client";
import { NextResponse } from "next/server";


export async function POST(req){
    console.log("POST", req);
    const result = await inngest.send({
        name:"user.create",
        data: {user: {
            email:"vikas@gmail.com",
            fullname:"vikas"
        }},
    })
    return NextResponse.json({result: result})
}