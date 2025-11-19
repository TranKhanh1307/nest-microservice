import { USERS_PATTERNS } from '@app/contracts/users/users.patterns';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { USERS_CLIENT } from './constant';

@Injectable()
export class UsersService {
  constructor(@Inject(USERS_CLIENT) private client: ClientProxy) {}

  findAll() {
    return this.client.send(USERS_PATTERNS.FIND_ALL, {});
  }
}
