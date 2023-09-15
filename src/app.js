// Default express application library
import e from "express";

// App routers
import RoleRouter from "./routes/roles.router.js";
import UserRouter from "./routes/user.router.js";

const app = e();

// Application level middlewares
app.use(e.json());
app.use(e.urlencoded({ extended: true }));

// App routing middlewares.
app.use("/api/roles", RoleRouter);
app.use("/api/users", UserRouter);

// Default module export
export default app;