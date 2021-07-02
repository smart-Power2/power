import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Headers
  } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto  } from './dto/update-feedback.dto';
import { JwtService } from '@nestjs/jwt';


@Controller('feedback')
export class FeedbackController {
  constructor(private FeedbackService: FeedbackService,private readonly jwtService: JwtService) {}

 
  @Get()
  findAll() {
    return this.FeedbackService.findAll();
  }


  @Get(':idCar')
  findOne(@Param('idCar') id: string) {
    return this.FeedbackService.findOne(+id);
  }


  @Post('create')
   create(@Body() CreateFeedbackDto: CreateFeedbackDto,@Headers() headers):Promise<any> {
    return  this.FeedbackService.create(CreateFeedbackDto);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateFeedbackDto: UpdateFeedbackDto) {
    return this.FeedbackService.update(+id, UpdateFeedbackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.FeedbackService.remove(+id);
  }
}
