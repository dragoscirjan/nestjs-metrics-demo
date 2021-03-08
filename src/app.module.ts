import { CounterMetric, MetricsModule } from '@mists/nestjs-metrics';
import { DefaultPrometheusMetricsController } from '@mists/nestjs-metrics-prometheus';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { adapters } from './stats';

@Module({
  imports: [
    MetricsModule.register({
      adapters,
    }),
  ],
  controllers: [AppController, DefaultPrometheusMetricsController],
  providers: [AppService, CounterMetric],
})
export class AppModule {}
