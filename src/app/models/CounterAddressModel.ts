import { Instance, t } from 'mobx-state-tree';

export type CounterAddressType = Instance<typeof CounterAddressModel>;
export const CounterAddressModel = t.model('CounterAddressModel', {
  id: t.string,
  number: t.number,
  str_number: t.string,
  str_number_full: t.string,
  house: t.model({
    address: t.string,
    id: t.string,
    fias_addrobjs: t.array(t.string),
  }),
});
