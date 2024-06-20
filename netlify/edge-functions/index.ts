import { Hono } from "https://deno.land/x/hono@v4.3.11/mod.ts";
import { handle } from "https://deno.land/x/hono@v4.3.11/adapter/netlify/mod.ts";

const app = new Hono();

app.get("/*", (c) => {
  const url = new URL("https://takahiroanno.com/directvote");

  // Keep all URL queries
  const queries = c.req.query();
  url.search = new URLSearchParams(queries).toString();
  return c.redirect(url.toString(), 302);
});

export default handle(app);
