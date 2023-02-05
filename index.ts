import { to } from "await-to-js";

interface ServerResponse {
  test: number;
}

const p = Promise.resolve({ test: 123 });
const pError = Promise.reject(new Error("Test error"));

const [err, data] = await to<ServerResponse>(p);
if (err) console.error(err);
console.log(data?.test);
// Output: 123

const [err2] = await to<ServerResponse>(pError);
if (err2) console.error(err2);

// Output: Error: Test error
