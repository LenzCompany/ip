import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

app.get('/', (c) => {
  const allowedIps = {
    allowed_ips: [
      "178.63.10.99",
      "203.0.113.0",
      "198.51.100.0"
    ]
  };
  return c.json(allowedIps);
});

// Jalankan server
const port = 3000;
serve({
  fetch: app.fetch,
  port
}, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
