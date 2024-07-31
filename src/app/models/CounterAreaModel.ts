import { Instance, t } from 'mobx-state-tree';

export type CounterAreaType = Instance<typeof CounterAreaModel>;
export const CounterAreaModel = t.model('CounterAreaModel', {
  id: t.string,
  is_automatic: t.boolean,
  communication: t.string,
  description: t.string,
  serial_number: t.string,
  installation_date: t.Date,
  brand_name: t.string,
  model_name: t.string,
  initial_values: t.array(t.number),
});
