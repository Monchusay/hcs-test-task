import { cast, flow, Instance, t } from 'mobx-state-tree';
import { CounterModel } from './models/CounterModel';
import {
  deleteCounterById,
  fetchCounterAddress,
  fetchCountersApi,
} from './apiRequests/ApiRequests';
import { CounterAddressModel } from './models/CounterAddressModel';
import { FetchResultType } from './types/Types';

export type RootStoreType = Instance<typeof RootStore>;

export const RootStore = t
  .model('Root Store', {
    countersCount: 0,
    addresses: t.map(CounterAddressModel),
    counters: t.array(CounterModel),
    state: t.enumeration('State', ['pending', 'done', 'error']),
  })
  .actions((self) => ({
    fetchCounters: flow(function* fetchCounters(limit: number, offset: number) {
      self.state = 'pending';
      try {
        const countersResponse: FetchResultType = yield fetchCountersApi(
          limit,
          offset
        );
        self.counters = cast(countersResponse.results);
        if (self.countersCount !== countersResponse.count) {
          self.countersCount = countersResponse.count;
        }
        const fetchedCountersAddressesIds: Array<string> = self.counters.map(
          (counter) => counter.area.id
        );
        if (fetchedCountersAddressesIds.length) {
          for (let i = 0; i <= fetchedCountersAddressesIds.length; i++) {
            if (
              fetchedCountersAddressesIds[i] &&
              !self.addresses.get(fetchedCountersAddressesIds[i])
            ) {
              self.addresses.set(
                fetchedCountersAddressesIds[i],
                yield fetchCounterAddress(fetchedCountersAddressesIds[i])
              );
            }
          }
        }
        self.state = 'done';
      } catch (error) {
        console.log(error);
        self.state = 'error';
      }
    }),
    deleteCounter: flow(function* deleteCounters(id: string) {
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
  addresses: {},
  counters: [],
  state: 'pending',
});

rootStore.fetchCounters(20, 0);
export const useStore = () => {
  return rootStore;
};
