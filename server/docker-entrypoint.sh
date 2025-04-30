#!/bin/sh
set -e

if [ "$NODE_ENV" = "production" ]; then
    echo "running MODE:PRODUCTION backend!"
    exec bun run ./src/index.ts
else
    echo "running MODE:DEV backend!"
    exec bun --hot run ./src/index.ts
fi