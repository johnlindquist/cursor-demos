# Optimization Demo

This project contains intentionally slow implementations of several real-world-like business functions, exposed via an Express server. It serves as a starting point for a benchmarking tutorial using vtest or other benchmarking frameworks. You can use this project to measure performance and iteratively optimize these functions.

## Exported Functions

- `parseCsv(csv: string): Record<string, string>[]` — naive CSV parsing
- `averageAge(users: User[]): number` — calculate average age
- `filterUsersByName(users: User[], query: string): User[]` — filter by name
- `generateHtmlTable(users: User[]): string` — generate HTML table markup
- `hashPassword(password: string): string` — CPU-intensive password hashing simulation

## Server Endpoints

The demo includes an Express server exposing the functions:

| Endpoint                            | Method | Description                                      |
|-------------------------------------|--------|--------------------------------------------------|
| GET `/`                             |        | Welcome message                                  |
| GET `/parse-csv`                    |        | Parse sample CSV and return JSON                 |
| GET `/avg-age`                      |        | Calculate average age on sample users            |
| GET `/filter-users?query=Alice`     |        | Filter sample users by name                      |
| GET `/html-table`                   |        | Generate HTML table for sample users             |
| GET `/hash-password?pw=secret`      |        | Simulate slow hashing of the password            |

## Usage

Install dependencies and start the server:

```bash
npm install
npx nx serve optimization-demo
```

Or build and run:

```bash
npm install
npx nx build optimization-demo
node dist/main.js
```

The server listens on port 3333 by default.

## Example Requests

Once the server is running on port 3333, you can exercise the endpoints with `curl`:

```bash
# Welcome message
curl http://localhost:3333/

# Parse sample CSV
curl http://localhost:3333/parse-csv

# Get average age
curl http://localhost:3333/avg-age

# Filter users by name
curl "http://localhost:3333/filter-users?q=Alice"

# Generate HTML table
curl http://localhost:3333/html-table

# Simulate slow password hash
curl "http://localhost:3333/hash-password?pw=secret"
```

## Next Steps

In the next tutorial, you'll learn how to benchmark these endpoints and underlying functions using vtest. You'll measure current performance and iteratively optimize each function to see real improvements.

