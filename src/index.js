import express from "express";
import routes from "./routes.js";

const app = express();
app.use(express.json());

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
