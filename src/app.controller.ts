import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { iWomen } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/women')
  getHello(): iWomen[] {
    return this.appService.getWomen();
  }
  @Get('/pepote')
  getPepote(): string {
    return this.appService.pepoteSaysHello();
  }
}
