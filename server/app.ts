import { Hono } from "hono";
import { logger } from "hono/logger";
import { expensesRoute } from "./routes/expenses";
import { authRoute } from "./routes/auth";
import { serveStatic } from "hono/bun";
const app = new Hono();

app.use("*", logger());

const apiRoutes = app
  .basePath("/api")
  .route("/expenses", expensesRoute)
  .route("/auth", authRoute);

app.get("*", serveStatic({ root: "frontend/dist" }));
app.get("*", serveStatic({ root: "frontend/dist/index.html" }));

export default app;
export type ApiRoutes = typeof apiRoutes;
