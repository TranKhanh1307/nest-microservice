import { registerAs } from '@nestjs/config';

export default registerAs(
  'user-service',
  (): UserServiceConfig => ({
    host: process.env.USER_SERVICE_HOST || 'localhost',
    port: Number(process.env.USER_SERVICE_PORT) || 3002,
  }),
);

export interface UserServiceConfig {
  host: string;
  port: number;
}
