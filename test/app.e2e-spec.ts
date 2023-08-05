// Make a database for testing
// Everytime we run tests, clean up data
// We must call request like we do with Postman

import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from 'src/app.module';

describe('App EndToEnd tests', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const appModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = appModule.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  afterAll(() => {
    app.close();
  });

  it.todo('Should Pass, hahaha');
});
