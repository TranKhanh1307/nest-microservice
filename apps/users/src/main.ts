import { NestFactory } from '@nestjs/core';
import { AsyncMicroserviceOptions, Transport } from '@nestjs/microservices';
import { UsersModule } from './users.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<AsyncMicroserviceOptions>(
    UsersModule,
    {
      useFactory: (configService: ConfigService) => ({
        transport: Transport.TCP,
        options: {
          host: configService.get<string>('USERS_SERVICE_HOST'),
          port: configService.get<number>('USERS_SERVICE_PORT'),
        },
      }),
      inject: [ConfigService],
    },
  );
  await app.listen();
  const port = app.get(ConfigService).get<number>('USERS_SERVICE_PORT');
  console.log(`Service is running on port ${port}`);
}
bootstrap();
