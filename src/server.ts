import { setupCustomLogging } from "./config/logger";
import { config, requiredEnvVars } from "./config/env";
setupCustomLogging(config.app.environment === 'development')
import app from "./app";
import { isConfigValid } from "./helpers/env";

const startServer = () => {
  if (!isConfigValid(requiredEnvVars)) {
    process.exit(1);
  };

  app.listen(config.app.port, () => {
    console.log(`Server is listening on port ${config.app.port}`)
  });
};

startServer();