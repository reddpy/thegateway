import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono");
});

app.get("/health", (c) => {
  return c.json({ status: "ok!" });
});

const port = parseInt(process.env.PORT || "8080");

console.log(`Server started on port: ${port}`);

export default {
  port: port,
  fetch: app.fetch,
};
