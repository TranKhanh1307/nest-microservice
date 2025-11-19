import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserDto } from '@app/contracts/users/user.dto';
import { USERS_PATTERNS } from '@app/contracts/users/users.patterns';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern(USERS_PATTERNS.FIND_ALL)
  findAll(): UserDto[] {
    return this.usersService.findAll();
  }
}
