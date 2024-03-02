import { Controller, Get, HttpCode, Query } from "@nestjs/common";
import { UsersService } from './users.service';
import { IUser } from '../types';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @HttpCode(200)
  getUserById(@Query('id') id: number): IUser[] {
    return this.userService.getUserById(id);
  }
}
