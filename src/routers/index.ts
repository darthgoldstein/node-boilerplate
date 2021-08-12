import { Router } from "express";
import ItemsRouter from "./items.router";

const routes = {
  ITEMS: '/items',
};

export default class MainRouter {
  static generateRouter(): Router {
    const mainRouter = Router();
    
    mainRouter.use(routes.ITEMS, ItemsRouter.generateRouter());

    return mainRouter;
  }
}
