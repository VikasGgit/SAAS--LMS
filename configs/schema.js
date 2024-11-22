import { boolean, pgTable, serial, varchar, json } from "drizzle-orm/pg-core";

export const USER_TABLE=pgTable('users', {
    id:serial().primaryKey(),
    name:varchar().default("Anonymous"),
    email:varchar().notNull(),
    isMember:boolean().default(false),
})

export const STUDY_TABLE_MATERIAL=pgTable('study_Material', {
    id:serial().primaryKey(),
    courseId:varchar().notNull(),
    courseType:varchar().notNull(),
    topic:varchar().notNull(),
    difficulty_level:varchar().default("easy"),
    courseLayout:json(),
    createdBy:varchar().notNull(),
});
