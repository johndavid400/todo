import { type FullConfig } from '@playwright/test';
import { DockerComposeEnvironment, Wait } from 'testcontainers';
import path from 'path';

async function globalSetup(config: FullConfig) {

  console.log('sup');

  // Initialize the database
  const composeFilePath = path.resolve(__dirname, '../../');
  const composeFile = 'docker-compose.yml';

  try {
    global.__ENVIRONMENT__ = await new DockerComposeEnvironment(
      composeFilePath,
      composeFile
    )
      .withProfiles('e2e')
      .withWaitStrategy('api-1', Wait.forLogMessage(/^Server started on 5000/))
      .up();
  } catch (e) {
    console.log(e);
  }

  console.log('Database Created');

  await new Promise((x) => setTimeout(x, 500));
}

export default globalSetup;
