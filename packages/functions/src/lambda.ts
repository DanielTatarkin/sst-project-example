import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (_evt) => {
  console.log("Hello World");
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: `Hello world. The time is ${new Date().toISOString()}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
});
