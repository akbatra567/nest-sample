import { Injectable } from '@nestjs/common';
import { IUser } from '../types';

const users: IUser[] = [
  {
    id: 1,
    name: 'Akshit',
    email: 'akbatra567@gmail.com',
  },
  {
    id: 2,
    name: 'Hunny',
    email: 'hab2997@gmail.com',
  },
];
@Injectable()
export class UsersService {
  getUserById = (id: number): IUser[] => {
    return users.filter((user) => user.id == id);
  };
}
