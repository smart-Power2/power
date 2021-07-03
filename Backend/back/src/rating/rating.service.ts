import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Rating} from './entities/rating.entity'
@Injectable()
export class RatingService {

  constructor(
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
  ) {}
  create(createRatingDto: CreateRatingDto) {
    console.log(createRatingDto)
    return this.ratingRepository.save(createRatingDto);  }

  findAll() {
    return `This action returns all rating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rating`;
  }

  update(id: number, updateRatingDto: UpdateRatingDto) {
    return `This action updates a #${id} rating`;
  }

  remove(id: number) {
    return `This action removes a #${id} rating`;
  }
}
