import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './setup-swagger';
import { SharedModule } from './shared/shared.module';
import { ApiConfigService } from './shared/services/api-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.select(SharedModule).get(ApiConfigService);
  const port = configService.serverConfig.port;
  if (configService.documentationEnabled) {
    setupSwagger(app);
  }
  await app.listen(port);
  console.info(`🚀 Server running on: http://localhost:${port}/doc`);
}
bootstrap();
