import express from 'express';

import {
  User,
  parseCsv,
  averageAge,
  filterUsersByName,
  generateHtmlTable,
  hashPassword,
} from './index';

const app = express();
app.use(express.json());

const sampleCsv = `name,age,active
Alice,30,true
Bob,25,false
Carol,40,true`;

const sampleUsers: User[] = [
  { name: 'Alice', age: 30, active: true },
  { name: 'Bob', age: 25, active: false },
  { name: 'Carol', age: 40, active: true },
];

app.get('/', (_req, res) => {
  res.send('Optimization Demo - Benchmarking Real-World Functions');
});

app.get('/parse-csv', (_req, res) => {
  const data = parseCsv(sampleCsv);
  res.json(data);
});

app.get('/avg-age', (_req, res) => {
  const avg = averageAge(sampleUsers);
  res.json({ averageAge: avg });
});

app.get('/filter-users', (req, res) => {
  const q = (req.query.q as string) || '';
  const result = filterUsersByName(sampleUsers, q);
  res.json(result);
});

app.get('/html-table', (_req, res) => {
  const html = generateHtmlTable(sampleUsers);
  res.send(html);
});

app.get('/hash-password', (req, res) => {
  const pw = (req.query.pw as string) || '';
  const hashed = hashPassword(pw);
  res.json({ hash: hashed });
});

const port = Number(process.env.PORT) || 3333;
// Bind to localhost only so it works in sandboxed environments
app.listen(port, '127.0.0.1', () => {
  console.log(`Server listening on http://localhost:${port}`);
});