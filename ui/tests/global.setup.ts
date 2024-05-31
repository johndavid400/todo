import { test as setup } from '@playwright/test';
import * as path from 'path';

setup('create new database', async ({ }) => {
  console.log('creating new database...');

  // Initialize the database
  const composeFilePath = path.resolve(__dirname, "../");
      const composeFile = "docker-compose.yml";
      composeContainer = await new DockerComposeEnvironment(
        composeFilePath,
        composeFile
      )
        .withProfiles("dev", "fe")
        .withWaitStrategy("api-1", Wait.forLogMessage(/^Server started on 5000/))
        .up();
      await new Promise((x) => setTimeout(x, 500));
});
