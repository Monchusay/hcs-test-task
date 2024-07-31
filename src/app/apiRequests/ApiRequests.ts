import { CounterType } from '../models/CounterModel';
import { FetchResultType } from '../types/Types';

export const fetchCountersApi: (
  limit: number,
  offset: number
) => Promise<CounterType> = async (limit, offset) => {
  const response: FetchResultType = await fetch(
    `http://showroom.eis24.me/api/v4/test/meters?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
  return response.results;
};

export const deleteCounterById = async (id: string) => {
  return await fetch(`http://showroom.eis24.me/api/v4/test/meters/${id}/`, {
    method: 'DELETE',
  });
};
