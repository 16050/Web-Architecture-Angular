import {Category} from './category';
import {Sport} from './sport';

export class Gear {
  id?: number;
  name: string;
  gender: string;
  description: string;
  image: string;
  link: string;
  sport: Sport;
  category: Category;
}
