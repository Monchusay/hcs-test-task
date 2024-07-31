import { Instance, t } from 'mobx-state-tree';
import { CounterAreaModel } from './CounterAreaModel';

export type CounterType = Instance<typeof CounterModel>;
export const CounterModel = t.model('CounterModel', {
  id: t.string,
  _type: t.array(t.string),
  is_automatic: t.maybeNull(t.boolean),
  communication: t.string,
  description: t.string,
  serial_number: t.string,
  installation_date: t.string,
  brand_name: t.maybeNull(t.string),
  model_name: t.maybeNull(t.string),
  initial_values: t.array(t.number),
  area: CounterAreaModel,
});
