import {Gear} from './gear';

export interface Category {
  id?: number;
  name: string;
  gears: Gear[];
}
