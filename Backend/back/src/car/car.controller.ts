import { CarService } from './car.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
// import { Car } from './car.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  CloudinaryService,
  CloudinaryResult,
} from 'src/cloudinary/cloudinary.service';

@Controller('car')
export class CarController {
  constructor(
    private carService: CarService,
    private cloudinaryService: CloudinaryService,
  ) {}
  @Get()
  findAll() {
    return this.carService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carService.findOne(+id);
  }

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() car: CreateCarDto,
    @UploadedFile('') file,
  ): Promise<any> {
    let result: CloudinaryResult = await this.cloudinaryService.uploadImage(
      file,
    );
    car.file = result.secure_url;
    return this.carService.create(car);
  }
  // @Post()
  // create(@Body() createCarDto: CreateCarDto) {
  //   console.log(createCarDto)
  //   return this.carService.create(createCarDto);
  // }
  // @Put(':id/update')
  // async update(@Param('id') id, @Body() car: Car): Promise<any> {
  //   car.id = Number(id);
  //   return this.carService.update(car);
  // }

  // @Delete(':id/delete')
  // async delete(@Param('id') id): Promise<any> {
  //   return this.carService.delete(id);
  // }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carService.remove(+id);
  }
}
