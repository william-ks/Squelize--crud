import cors from "cors";
import "dotenv/config";
import express from "express";
import "express-async-errors";
import { router } from "./api/routes";
import { handleError } from "./api/middlewares/HandleError";

export class App {
  public express: express.Application;

  private middleware() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  private routes() {
    this.express.use(router);
    this.express.use(handleError);
  }

  constructor() {
    this.express = express();

    this.middleware();
    this.routes();
  }
}
