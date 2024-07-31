import { Instance, t } from 'mobx-state-tree';

export type CounterAreaType = Instance<typeof CounterAreaModel>;
export const CounterAreaModel = t.model('CounterAreaModel', {
  id: t.string,
});
