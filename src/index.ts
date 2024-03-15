import { AppDataSource } from "./data-source";
import express, { Request, Response } from "express";
import routes from "./routes";
import cors from "cors";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const PORT = 5000;

    const corsConfig: object = {
      origin: "http://localhost:5173",
    };

    app.use(cors(corsConfig));
    app.use(express.json());
    app.use("/api/v1", routes);

    app.get("/hello", (req: Request, res: Response) => {
      res.status(200).json({ message: "Success get data" });
    });

    app.listen(PORT, () =>
      console.log(`[ SUCCESS ] Application running on port ${PORT}`)
    );
  })
  .catch((error) => console.log(error));
