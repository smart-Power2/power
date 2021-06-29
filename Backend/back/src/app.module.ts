import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Car } from './car/entities/car.entity';
import { Rating } from './rating/entities/rating.entity';
import { AuthModule } from './auth/auth.module';
import { CarModule } from './car/car.module';
import { ReservationModule } from './reservation/reservation.module';
import { Reservation } from './reservation/entities/reservation.entity';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

import { RatingModule } from './rating/rating.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'mycar',
      username: 'root',
      password: 'root',
      entities: [__dirname + '/**/*.entity{.ts,.js}', User , Car , Reservation ,Rating],
      synchronize: true,
    }),
    CloudinaryModule,
    CarModule,
    UserModule,
    AuthModule,
    ReservationModule,
    RatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
