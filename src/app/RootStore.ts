import { flow, Instance, t } from 'mobx-state-tree';
import { CounterModel } from './models/CounterModel';
import { deleteCounterById } from './apiRequests/ApiRequests';

export type RootStoreType = Instance<typeof RootStore>;

export const RootStore = t
  .model('Root Store', {
    counters: t.array(CounterModel),
    state: t.enumeration('State', ['pending', 'done', 'error']),
  })
  .actions((self) => ({
    fetchCounters: flow(function* fetchCounters(limit: number, offset: number) {
      self.state = 'pending';
      try {
        /*self.counters = yield fetchCountersByApi(limit, offset);*/
        self.state = 'done';
      } catch (error) {
        self.state = 'error';
      }
    }),
    deleteCounter: flow(function* deleteCounters(
      id: string,
      limit: number,
      offset: number
    ) {
      self.state = 'pending';
      try {
        yield deleteCounterById(id);
        self.state = 'done';
      } catch (error) {
        self.state = 'error';
      }
    }),
  }));

let rootStore: RootStoreType = RootStore.create({
  counters: [],
  state: 'pending',
});
rootStore.fetchCounters(20, 0).then(() => null);
export const useStore = () => {
  return rootStore;
};
