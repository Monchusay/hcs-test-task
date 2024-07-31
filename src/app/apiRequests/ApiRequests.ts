import { FetchResultType } from '../types/Types';
import { CounterAddressType } from '../models/CounterAddressModel';

export const fetchCountersApi: (
  limit: number,
  offset: number
) => Promise<FetchResultType> = async (limit, offset) => {
  const response: FetchResultType = await fetch(
    `http://showroom.eis24.me/api/v4/test/meters?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
  return response;
};
export const fetchCounterAddress: (
  id: string
) => Promise<CounterAddressType> = async (id) => {
  const response: CounterAddressType = await fetch(
    `http://showroom.eis24.me/api/v4/test/areas/${id}`
  ).then((res) => res.json());
  return response;
};
export const deleteCounterById = async (id: string) => {
  return await fetch(`http://showroom.eis24.me/api/v4/test/meters/${id}/`, {
    method: 'DELETE',
  });
};
