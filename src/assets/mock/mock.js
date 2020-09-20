import Mock from "mockjs";
import { todoList,arrayDemo} from "./data.js";
Mock.mock("/todolist", /post|get/i, todoList);
Mock.mock("/arraydemo", /post|get/i, arrayDemo);
