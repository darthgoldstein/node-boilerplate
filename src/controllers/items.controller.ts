import { Request, Response } from 'express';
import ItemsService from '../services/items.service';

export default class ItemsController {
  static getItems(req: Request, res: Response) {
    const items = ItemsService.getItems();
    res.json(items);
  }
}
