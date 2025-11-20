import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const port = app.get(ConfigService).get<number>('API_GATEWAY_PORT');
  await app.listen(port ?? 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
