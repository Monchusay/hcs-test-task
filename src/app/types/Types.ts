import { CounterType } from '../models/CounterModel';

export type FetchResultType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<CounterType>;
};
