import { NestFactory } from '@nestjs/core';
import { AccountsModule } from './accounts.module';
import { useContainer } from 'class-validator';
import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';
async function bootstrap() {
  const app = await NestFactory.create(AccountsModule);
  useContainer(app, { fallbackOnErrors: true });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(bodyParser.json()); // parse application/json
  app.use(bodyParser.urlencoded({ extended: true }));

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.use(passport.initialize());

  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}
bootstrap();
