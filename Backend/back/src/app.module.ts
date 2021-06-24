import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Car } from './car/entities/car.entity';
import { AuthModule } from './auth/auth.module';
import { CarModule } from './car/car.module';
import { ReservationModule } from './reservation/reservation.module';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'power',
      entities: [User,Car],
      synchronize: true,
    }),
    AuthModule,
    CarModule,
    ReservationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
