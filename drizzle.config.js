import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: "postgresql",
    schema: "./configs/schema.js", // Ensure the correct path and extension
    dbCredentials: {
        url: 'postgresql://saas_owner:PQIeYi8mlpz4@ep-soft-cherry-a51ttlo5-pooler.us-east-2.aws.neon.tech/saas?sslmode=require',
    },
});
