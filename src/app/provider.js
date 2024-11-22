"use client";
import React, { useEffect } from "react";
import { db } from "../../configs/db";
import { USER_TABLE } from "../../configs/schema";
import { UserButton, useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import axios from "axios";

const Provider = ({ children }) => {
  const { user } = useUser();
  console.log("user", user);
  const checkIsNewUser = async () => {

   

    const result = await db
      .select()
      .from(USER_TABLE)
      .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));

    console.log('result',result);
    if (result?.length == 0) {
      const userResp = await db
        .insert(USER_TABLE)
        .values({
          name: user?.fullName || "Anonymous",
          email: user?.primaryEmailAddress?.emailAddress,
        })
        .returning({ id: USER_TABLE });
      console.log(userResp);
     
      }
      // const result1 = await axios.post('api/create-user' , {user:user} )
      // console.log("result in from ingext",result1.data);
    }
  

  useEffect(() => {
    user&&checkIsNewUser();
  }, [user]);

  return (
    <div>
      {children}
    </div>
  );
};

export default Provider;
