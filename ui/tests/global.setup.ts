import { test as setup } from '@playwright/test';
import { DockerComposeEnvironment, Wait } from "testcontainers";
import path from 'path';
import { fileURLToPath } from 'url';

setup('create new database', async ({ }) => {
  console.log('creating new database...');

  console.log('start');

  const filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const dirname = path.dirname(filename);

  // Initialize the database
  const composeFilePath = path.resolve(dirname, "../../");
  const composeFile = "docker-compose.yml";

  console.log('go');

  try {
    const composeContainer = await new DockerComposeEnvironment(
        composeFilePath,
        composeFile
      )
      .withProfiles("dev", "fe")
      .withWaitStrategy("api-1", Wait.forLogMessage(/^Server started on 5000/))
      .up();
  }
  catch (e) {
    console.log(e)
  }

  console.log('finished');

  await new Promise((x) => setTimeout(x, 500));
});
