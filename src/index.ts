import { AppDataSource } from "./data-source";
import express from "express";
import routes from "./routes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const PORT = 5000;

    app.use("/api/v1", routes);

    app.listen(PORT, () => console.log(`[ SUCCESS ] Application running on port ${PORT}`));
  })
  .catch((error) => console.log(error));
