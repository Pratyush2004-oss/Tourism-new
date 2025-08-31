import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: './src/config/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:JjXVaRv26PKB@ep-jolly-bread-a5hdf74l.us-east-2.aws.neon.tech/travel-tourism?sslmode=require&channel_binding=require',
    }
})