import {Gear} from './gear';

export interface Sport {
  id?: number;
  name: string;
  description: string;
  gears: Gear[];
}
