"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const scrap_service_1 = require("./scrap/scrap.service");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const scraper = app.get(scrap_service_1.ScraperService);
    const books = await scraper.scrapeBooks();
    console.log(books);
    await app.close();
}
bootstrap();
//# sourceMappingURL=main.js.map