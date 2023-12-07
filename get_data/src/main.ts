import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ScraperService } from './scrap/scrap.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const scraper = app.get(ScraperService);
  const books = await scraper.scrapeBooks();
  console.log(books);
  await app.close();
}
bootstrap();
