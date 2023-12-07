import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class ScraperService {
  async scrapeBooks() {
    const url = 'https://books.toscrape.com/';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const books = $('section > div:nth-child(2) > ol > li > article');

    const booksData = [];
    books.each((index, element) => {
      const title = $(element).find('h3 > a').attr('title');
      const bookUrl = url + $(element).find('h3 > a').attr('href');
      const price = $(element).find('.product_price .price_color').text();
      const status = $(element)
        .find('.product_price .instock.availability')
        .text()
        .trim();

      booksData.push({
        title,
        bookUrl,
        price,
        status,
      });
    });

    return booksData;
  }
}