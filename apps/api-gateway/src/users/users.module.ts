import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USERS_CLIENT } from './constant';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        name: USERS_CLIENT,
        useFactory: (configService: ConfigService) => {
          const host = configService.get<string>('USERS_SERVICE_HOST');
          const rmqPort = configService.get<string>('RMQ_PORT');
          return {
            transport: Transport.RMQ,
            options: {
              urls: [`amqp://${host}:${rmqPort}`],
              queue: configService.get<string>('USERS_SERVICE_QUEUE'),
              queueOptions: {
                durable: false,
              },
            },
          };
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
