export const isConfigValid = (requiredEnvVars: string[]): boolean => {
  const missingEnvVars = requiredEnvVars.filter((envVar => !process.env[envVar]));

  if (missingEnvVars.length) {
    console.error(`helpers/env.ts --> isConfigValid() --> Missing required environment variables:\n${missingEnvVars.join("\n")}`);
    return false;
  };

  console.success(`helpers/env.ts --> isConfigValid() --> Environment variables validated successfully`);
  return true;
};