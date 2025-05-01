import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "./lib/auth";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: ["http://localhost:3000"], // Next.js frontend origin
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    exposeHeaders: ["Set-Cookie"],
  })
);

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

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
