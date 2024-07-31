import { Instance, t } from 'mobx-state-tree';
import { CounterAreaModel } from './CounterAreaModel';

export type CounterType = Instance<typeof CounterModel>;
export const CounterModel = t.model('CounterModel', {
  id: t.string,
  _type: t.enumeration([
    'ColdWaterAreaMeter',
    'HotWaterAreaMeter',
    'AreaMeter',
  ]),
  area: CounterAreaModel,
});
