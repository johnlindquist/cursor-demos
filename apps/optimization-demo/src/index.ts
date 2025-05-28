/**
 * Real-world-like "slow" business logic functions for benchmarking demos.
 */

export interface User {
  name: string;
  age: number;
  active: boolean;
}

/**
 * Naively parse a CSV string into an array of objects.
 */
export function parseCsv(csv: string): Array<Record<string, string>> {
  const lines = csv.trim().split('\n');
  const headers = lines.shift()!.split(',');
  const rows: Array<Record<string, string>> = [];
  for (const line of lines) {
    const values = line.split(',');
    const entry: Record<string, string> = {};
    for (let i = 0; i < headers.length; i++) {
      entry[headers[i]] = values[i];
    }
    rows.push(entry);
  }
  return rows;
}

/**
 * Calculate average age from a list of users.
 */
export function averageAge(users: User[]): number {
  let sum = 0;
  for (const user of users) {
    sum += user.age;
  }
  return users.length ? sum / users.length : 0;
}

/**
 * Filter users by a query string on their name.
 */
export function filterUsersByName(users: User[], query: string): User[] {
  const result: User[] = [];
  for (const user of users) {
    if (user.name.toLowerCase().includes(query.toLowerCase())) {
      result.push(user);
    }
  }
  return result;
}

/**
 * Generate a simple HTML table for a list of users.
 */
export function generateHtmlTable(users: User[]): string {
  let html = '<table><tr><th>Name</th><th>Age</th><th>Active</th></tr>';
  for (const user of users) {
    html += `<tr><td>${user.name}</td><td>${user.age}</td><td>${user.active}</td></tr>`;
  }
  html += '</table>';
  return html;
}

/**
 * Hash a password using a CPU-intensive loop (simulated work).
 */
export function hashPassword(password: string): string {
  let hash = '';
  for (let i = 0; i < 1e7; i++) {
    hash = password
      .split('')
      .reverse()
      .join('') + i.toString();
  }
  return hash;
}
