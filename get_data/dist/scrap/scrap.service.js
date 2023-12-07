"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScraperService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const cheerio = require("cheerio");
let ScraperService = class ScraperService {
    async scrapeBooks() {
        const url = 'https://books.toscrape.com/';
        const response = await axios_1.default.get(url);
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
};
exports.ScraperService = ScraperService;
exports.ScraperService = ScraperService = __decorate([
    (0, common_1.Injectable)()
], ScraperService);
//# sourceMappingURL=scrap.service.js.map