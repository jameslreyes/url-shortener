import { setupCustomLogging } from "./config/logger";
import { env, requiredEnvVars } from "./config/env";
setupCustomLogging(env.nodeEnv === 'development')
import app from "./app";
import { isConfigValid } from "./helpers/env";

const startServer = () => {
  if (!isConfigValid(requiredEnvVars)) {
    process.exit(1);
  };

  app.listen(env.port, () => {
    console.log(`Server is listening on port ${env.port}`)
  });
};

startServer();