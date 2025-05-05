import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { agents, db } from "./db";
import { auth } from "./lib/auth";

const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>();

app.use(
  "*",
  cors({
    origin: ["http://localhost:3000"], // Next.js frontend origin
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    exposeHeaders: ["Set-Cookie"],
  }),
  async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers });

    if (!session) {
      c.set("user", null);
      c.set("session", null);
      return next();
    }

    c.set("user", session.user);
    c.set("session", session.session);
    return next();
  }
);

app.get("/", (c) => {
  return c.text("Hello Hono");
});

app.get("/session", async (c) => {
  const session = c.get("session");
  const user = c.get("user");

  if (!user) return c.body(null, 401);

  return c.json({
    session,
    user,
  });
});

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

app.get("/get-agents", async (c) => {
  const user = c.get("user");
  const session = c.get("session");

  if (!user || !session) {
    return c.json({ status: "error", message: "Unauthorized" }, 401);
  }

  try {
    const agent_results = await db.query.agents.findMany({
      where: eq(agents.userId, user.id),
    });

    return c.json(agent_results);
  } catch (error) {
    return c.json({ status: "error", message: "Failed to query agents" }, 500);
  }
});

app.post("/new-agent", async (c) => {
  const body = await c.req.json();

  const user = c.get("user");

  try {
    await db.insert(agents).values({ ...body, userId: user?.id });
  } catch (error) {
    return c.json({ status: "error inserting!" });
  }

  return c.json({ status: 200 });
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
