import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScraperService } from './scrap/scrap.service';
import { BooksController } from './books/books.controller';

@Module({
  imports: [],
  controllers: [AppController, BooksController],
  providers: [AppService, ScraperService],
})
export class AppModule {}
