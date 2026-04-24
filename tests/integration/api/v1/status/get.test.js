test("GET to api/v1/status should retunr 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parseUpdatedAt);
  expect(responseBody.database.version).toEqual("16.13");
  expect(responseBody.database.max_connections).toEqual(100);
  expect(responseBody.database.opened_connections).toEqual(1);
});
