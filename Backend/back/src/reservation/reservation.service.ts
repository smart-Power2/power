import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Reservation} from './entities/reservation.entity'

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  create(createReservationDto: CreateReservationDto) {
    console.log(createReservationDto)
    return this.reservationRepository.save(createReservationDto);
  }

  findAll(): Promise<Reservation[]> {
    return this.reservationRepository.find({ relations: ["user", 'car'] });
  }

  findOne(id: number): Promise<Reservation> {
    return this.reservationRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.reservationRepository.delete(id);
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} user`;
  }
}
