async function globalSetup() {
  console.log('deleting test database...');
  // Delete the database
  await global.__ENVIRONMENT__?.down();
  console.log('Test database successfully deleted...');
}

export default globalSetup;
