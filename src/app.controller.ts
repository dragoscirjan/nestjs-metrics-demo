import { CounterMetric } from '@mists/nestjs-metrics';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    protected readonly counter: CounterMetric,
  ) {}

  @Get()
  getHello(): string {
    this.counter.inc({
      // metric: 'routes_all_counter'
    });
    return this.appService.getHello();
  }
}
