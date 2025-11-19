import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import usersServiceConfig from './config/users-service.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [usersServiceConfig],
      envFilePath: ['.development.env', '.env'],
      isGlobal: true,
    }),
    UsersModule,
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
