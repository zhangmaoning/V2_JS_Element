import Mock from "mockjs";
import {user,todoList,arrayDemo} from "./data.js";
Mock.mock("/todolist", /post|get/i, todoList);
Mock.mock("/arraydemo", /post|get/i, arrayDemo);
Mock.mock("/main/userinfo", /post|get/i, user);
