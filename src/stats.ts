// import * as prometheus from 'prom-client';
import * as StatsdClient from 'statsd-client';
import { PrometheusCounterAdapter } from '@mists/nestjs-metrics-prometheus';
import { StatsdCounterAdapter } from '@mists/nestjs-metrics-statsd';

export const statsdClient = new StatsdClient({
  host: process.env.NODE_ENV === 'production' ? 'statsd' : 'localhost',
  port: 8125, // udp
  // port: 8126, // tcp
  // tcp: true,
});
console.log(statsdClient);
// process.exit(0)

export const adapters = [
  {
    metric: 'routes_all_count_calls',
    adapter: new PrometheusCounterAdapter({
      name: 'routes_all_count_calls',
      help: 'routes_all_count_calls',
    }),
  },
  {
    metric: 'routes_all_count_calls',
    adapter: new StatsdCounterAdapter('routes.all.count.calls', statsdClient),
  },
];
