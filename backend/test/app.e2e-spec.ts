import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './../src/app.controller';
import { AppModule } from './../src/app.module';

describe('AppController (integration)', () => {
  let moduleFixture: TestingModule;
  let appController: AppController;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    appController = moduleFixture.get(AppController);
  });

  it('returns hello from the root controller', () => {
    expect(appController.getHello()).toBe('Hello World!');
  });

  afterEach(async () => {
    await moduleFixture.close();
  });
});
