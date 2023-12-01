import { Router } from "express";
import { createUserController } from "./use-cases/createUser";
import { readAllUserController } from "./use-cases/readAllUser/index";

const router = Router();

router.post("/user", (req, res) => {
  return createUserController.handle(req, res);
});

router.get("/user", (req, res) => {
  return readAllUserController.handle(req, res);
});

export { router };
