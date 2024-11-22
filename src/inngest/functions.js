import { eq } from "drizzle-orm";

import { inngest } from "./client";
import { db } from "../../configs/db";
import { USER_TABLE } from "../../configs/schema";


export const helloWorld= inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "4s");
    return { event, body: "THis is vikas Guypaa" };
  }
);

// export const checkUser = inngest.createFunction(
//   { id: "creating and adding user" },
//   { event: "user.create" },
  
//   async ({ event, step }) => {
//     // fetch the user
//     // let existing="";
//     //  await step.run("wiat", async () => {
//     //   const user  = event.data.user;
//     //  console.log("Step started: Fetching user", { user });

//     //    existing = await db
//     //     .select()
//     //     .from(USER_TABLE)
//     //     .where(eq(USER_TABLE.email, user?.email));

//     //    console.log("Existing users:", { existing });
//     //   existing="vikas"
//     //   if (existing?.length === 0) {
//     //     const userResp = await db
//     //       .insert(USER_TABLE)
//     //       .values({
//     //         name: user?.fullName || "Anonymous",
//     //         email: user?.email
//     //       })
//     //       .returning({ id: USER_TABLE.id });

//     //      console.log("Inserted user:", { userResp });
//     //   }

//     //   console.log("Inngest function executed successfully");
    
//     // });

//    await step.run("wairt"  , ()=>{  console.log("Final step result:**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************");})
//     return "success";
//   }
// );
