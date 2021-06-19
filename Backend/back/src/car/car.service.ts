import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import {CreateCarDto} from "./dto/create-car.dto"
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './car.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}
  async create(car: CreateCarDto): Promise<Car> {
    return await this.carRepository.save(car);
  }

  async readAll(): Promise<Car[]> {
    return await this.carRepository.find();
  }

//   async update(car: UpdateCarDto): Promise<UpdateResult> {
//     return await this.carRepository.update(car.id, car);
//   }

  async delete(id): Promise<DeleteResult> {
    return await this.carRepository.delete(id);
  }
}

