import express from "express";
import "dotenv/config";
import user from "./routes/user.route";
import { AppDataSource } from "./data-source";
import errosMiddleware from "./middleware/errors.middleware";

const app = express();

app.use(express.json());

app.use("/users", user);

app.use(errosMiddleware)

if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT || 3333, () => {
  });
}

export default app;
