import { OmitType } from '@nestjs/mapped-types';
import { UserEntity } from './user.entity';

export class UserDto extends OmitType(UserEntity, ['password'] as const) {}
