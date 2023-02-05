<h1 align="center">Welcome to better-async 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/better-async" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/better-async.svg">
  </a>
</p>

> Easy to handle the async await without try catch

[![IT Man - Tech #32 - Async await wrapper for easy error handling without try-catch [Vietnamese]](https://i.ytimg.com/vi/iLB75jzQrJ8/hqdefault.jpg)](https://www.youtube.com/watch?v=iLB75jzQrJ8)

## Prerequisites

- [Bun — fast all-in-one JavaScript runtime](https://bun.sh/)

## Libraries

- [scopsy/await-to-js: Async await wrapper for easy error handling without try-catch](https://github.com/scopsy/await-to-js)

## Install

```sh
bun install
```

## Usage

This is simple usage for await-to-js with Bun.

```typescript
// index.ts
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
```

```sh
❯ bun run index.ts
123
3 | interface ServerResponse {
4 |   test: number;
5 | }
6 |
7 | const p = Promise.resolve({ test: 123 });
8 | const pError = Promise.reject(new Error("Test error"));
                                 ^
error: Test error
      at /Users/huynhducdung/Projects/research/better-async/index.ts:8:30
```

## Author

👤 **Huynh Duc Dung**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)

Give a ⭐️ if this project helped you!
