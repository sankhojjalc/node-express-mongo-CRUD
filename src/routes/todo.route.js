import { Router } from "express";
import { routes } from "../constants.js";
import { getAllTodo, addTodo } from "../controllers/todo.controller.js";

const router = Router();

router.route(routes.user).get(getAllTodo);
router.route(routes.user).post(addTodo);

export default router;
