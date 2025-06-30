import { loadEnv, defineConfig } from "@medusajs/framework/utils"

loadEnv(process.env.NODE_ENV || "development", process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL, // Provided by Medusa Cloud
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET // Set in Medusa Cloud
      cookieSecret: process.env.COOKIE_SECRET // Set in Medusa Cloud
    },
  },
  admin: {
      backendUrl: process.env.MEDUSA_BACKEND_URL
  },
})
