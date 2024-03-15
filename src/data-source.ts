import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./entity/Users";
// import { Paslon } from "./entity/Paslon";
import { Articles } from "./entity/Articles";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Authentic11.",
  database: "micro_app_backend",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: [],
  subscribers: [],
});
