import  express, { request, response }  from "express";
import { UserController } from "./controller/UserController.js";

const app = express()
app.use(express.json())

const usercontroller = new UserController()

app.get("/post/:id", usercontroller.handleGetById)

app.get("/comments/:id", usercontroller.handleCommentsById)

app.get("/comments", usercontroller.handleGetAllComments)

app.get("/post/:id/comments", usercontroller.GetPostCommentById)

app.get("/post", usercontroller.handleGetAll)

app.post("/post", usercontroller.handlePost)

app.get("/sobre", usercontroller.sobre)

app.listen(8080, () => console.log("server is running in port 8080"))