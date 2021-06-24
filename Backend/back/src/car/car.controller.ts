import { CarService } from './car.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Car } from './car.entity';
import { CreateCarDto } from "./dto/create-car.dto"
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService, CloudinaryResult } from 'src/cloudinary/cloudinary.service';

@Controller('car')
export class CarController {
  constructor(
    private carService: CarService,
    private cloudinaryService: CloudinaryService,
  ) {}
  @Get()
  read(): Promise<Car[]> {
    return this.carService.readAll();
  }

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async create(@Body() car: CreateCarDto, @UploadedFile('') file): Promise<any> {
    let result: CloudinaryResult = await this.cloudinaryService.uploadImage(file)
    car.file = result.secure_url
    return this.carService.create(car);
  }

  // @Put(':id/update')
  // async update(@Param('id') id, @Body() car: Car): Promise<any> {
  //   car.id = Number(id);
  //   return this.carService.update(car);
  // }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.carService.delete(id);
  }
}
