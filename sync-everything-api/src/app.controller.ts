import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get the app info ...' })
  @ApiCreatedResponse({
    description: 'Successfully check if the application is alive.',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
