import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoryController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

const routes = Router();
  
/**
 * [X] POST   | C - CREATE
 * [X] GET    | R - READ
 * [X] UPDATE | U - UPDATE
 * [X] DELETE | D - DELETE
 */
routes.get("/categories", new GetAllCategoriesController().handle);
routes.post("/categories", new CreateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.get("/videos", new GetAllVideosController().handle);
routes.post("/videos", new CreateVideoController().handle);

export { routes };