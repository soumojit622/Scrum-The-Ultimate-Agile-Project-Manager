import { Hono } from "hono";
import { loginSchema } from "../schemas";
import { zValidator } from "@hono/zod-validator";

const app = new Hono().post(
  "/login",
  zValidator("json", loginSchema),
  async (c) => {
    const { email, password } = c.req.valid("json");
    console.log({ email, password });

    return c.json({ email, password });
  }
);

export default app;
