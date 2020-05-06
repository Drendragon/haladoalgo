import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getKMP(
    @Query('text') text: string, @Query('pattern') pattern: string) {
    return this.appService.getKmp(text, pattern);
  }
}
