import { Router } from "express";
import ItemsController from "../controllers/items.controller";

const routes = {
  GET_ITEMS: '/all',
};

export default class InventoryRouter {
  static generateRouter() {
    const inventoryRouter = Router();

    inventoryRouter.get(routes.GET_ITEMS, ItemsController.getItems);
    
    return inventoryRouter;
  }
}