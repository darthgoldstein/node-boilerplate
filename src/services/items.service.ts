import { Item } from '../models/item.model';

let items: Item[] = [{ name: 'apple' }, { name: 'orange' }];

export default class InventoryService {
  static getItems(): Item[] {
    return items;
  }
}
