import React, { ReactElement } from 'react';
import IconCountersCold from '../../../../shared/icons/IconCountersCold';
import IconCountersHot from '../../../../shared/icons/IconCountersHot';

export type CounterType = {
  text: string;
  icon: ReactElement;
};
export const counterTypesMapping: { [key: string]: CounterType } = {
  ColdWaterAreaMeter: {
    text: 'ХВС',
    icon: <IconCountersCold />,
  },
  HotWaterAreaMeter: {
    text: 'ГВС',
    icon: <IconCountersHot />,
  },
};
export const counterIsAutomaticMapping: { [key: string]: string } = {
  true: 'да',
  false: 'нет',
};
