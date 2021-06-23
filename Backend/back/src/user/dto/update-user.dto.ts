import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  password: string;
  image: string;
  adress: string;
  cin: number;
  type: string;
}
