import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from  'typeorm';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from './feedback.entity';

@Injectable()
export class FeedbackService {
    constructor(
        @InjectRepository(Feedback)
        private feedbackRepository: Repository<Feedback>,
      ) {}

      create(CreateFeedbackDto: CreateFeedbackDto) {
        return this.feedbackRepository.save(CreateFeedbackDto);
      }
  
      findAll(): Promise<Feedback[]> {
        return this.feedbackRepository.find();
      }
    
      findOne(id: number): Promise<Feedback[]> {
        return this.feedbackRepository.find({where:{idCar:id}});
      }
    
      async remove(id: number): Promise<void> {
        await this.feedbackRepository.delete(id);
      }
    
      update(id: number, UpdateFeedbackDto: UpdateFeedbackDto) {
        return `This action updates a #${id} user`;
      }
      

      //  findAllFeedback (Car_id: number): Promise<Feedback[]>{
      //   return this.feedbackRepository.find({ Car_id : Car_id });
      // }
}
