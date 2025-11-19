import { UserDto } from '@app/contracts/users/user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    { id: '1', name: 'John Doe', age: 30, username: 'johndoe' },
    { id: '2', name: 'Jane Doe', age: 25, username: 'janedoe' },
  ];

  findAll(): UserDto[] {
    return this.users;
  }
}
