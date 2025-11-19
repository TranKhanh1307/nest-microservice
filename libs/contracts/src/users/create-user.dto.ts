import { OmitType } from '@nestjs/mapped-types';
import { UserEntity } from './user.entity';

export class CreateUserDto extends OmitType(UserEntity, ['id'] as const) {}
