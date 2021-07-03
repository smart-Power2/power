import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}


  async findOne(email: string): Promise<User | undefined> {
<<<<<<< HEAD
    return this.usersRepository.findOne({ email: email });
=======
    console.log(email);
    return this.userRepository.findOne({ email: email });
>>>>>>> d93e9f1b29470aaa1761b7195ceed02eaf35dd52
  }
  findOne1(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.FirstName = createUserDto.FirstName;
    user.LastName = createUserDto.LastName;
    user.email = createUserDto.email;
    user.phoneNumber = createUserDto.phoneNumber;
    user.password = createUserDto.password;
    user.type = createUserDto.type;
    await this.userRepository.save(user);
    return user;
  }

  async signup(createUserDto: CreateUserDto) {
    const user = new User();
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
    const email = createUserDto.email;
    const findlogin = await this.userRepository.findOne({ email: email });

    if (findlogin) {
      return JSON.stringify({ msg: 'This email exists' });
    }


    const createdUser = this.create({
      FirstName: createUserDto.FirstName,
      LastName: createUserDto.LastName,
      email: createUserDto.email,
      password: hash,
      phoneNumber: createUserDto.phoneNumber,
      type: createUserDto.type,
    });
    return JSON.stringify({ msg: 'right' });
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

<<<<<<< HEAD

=======
  // findOne(id: number): Promise<User> {
  //   return this.userRepository.findOne(id);
  // }
>>>>>>> d93e9f1b29470aaa1761b7195ceed02eaf35dd52

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
}

