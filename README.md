# How to use

1. Install Deno 2 (I am currently using Deno 2.2.8)
2. You need a [Neon Postgres](https://neon.tech/home) database with SSL enabled or any instance that you can use with `sslmode=require` (Neon Postgres has a big free tier)
3. Run `deno task start:bug`

# Description

This repository contains two files:

- `pg_bug.ts`: This script will throw the error `Top-level await promise never resolved`
- `pg_no_bug.ts`: This script will not throw an error (run it with `deno task start:no-bug`)
