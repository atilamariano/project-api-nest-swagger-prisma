import { PartialType } from '@nestjs/swagger';
// eslint-disable-next-line prettier/prettier
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
