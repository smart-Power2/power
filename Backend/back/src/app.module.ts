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
import { RatingModule } from './rating/rating.module';
import { Feedback } from './feedback/feedback.entity';
import { FeedbackModule } from './feedback/feedback.module';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Taraji2020',
      database: 'power',
      entities: [ User , Car , Reservation ,Rating, Feedback],
      synchronize: true,
    }),
    AuthModule,
    CarModule,
    ReservationModule,
    RatingModule,
    FeedbackModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
