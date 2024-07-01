import Todo from "../models/todo.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const addTodo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if ([title, description]?.some((field) => field.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const todo = await Todo.create({
    title,
    description,
  });

  if (!todo) {
    throw new ApiError(500, "Something went wrong while adding data");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, todo, "Todo added successfully"));
});

const getAllTodo = asyncHandler(async (req, res) => {
  const allTodos = await Todo.find().exec();

  if (!allTodos) {
    throw new ApiError(404, "No todos found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, allTodos, "All Todos fetched"));
});

export { addTodo, getAllTodo };
