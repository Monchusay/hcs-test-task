import React, { FC } from 'react';
import { CounterType } from '../../../../app/models/CounterModel';
import * as SC from './CounterItemStyled';
import { counterTypesMapping } from './common';
import DeleteButton from '../../../../widgets/deleteButton/DeleteButton';
import { formatDate } from '../../../../shared/helpers/formatDate';

type CounterItemPropsType = {
  counter: CounterType;
  deleteCounter: () => void;
  number: number;
  addressLine: string;
};
const CounterItem: FC<CounterItemPropsType> = (props) => {
  const { counter, deleteCounter, number, addressLine } = props;

  const counterType = counter._type[0]

  return (
    <SC.CounterContainer>
      <SC.CounterCell $center={true}>
        <SC.CounterText $gray={true}>{number}</SC.CounterText>
      </SC.CounterCell>
      <SC.CounterCell>
        {counterTypesMapping[counterType].icon}
        <SC.CounterText>
          {counterTypesMapping[counterType].text}
        </SC.CounterText>
      </SC.CounterCell>
      <SC.CounterCell>
        <SC.CounterText>{formatDate(counter.installation_date)}</SC.CounterText>
      </SC.CounterCell>
      <SC.CounterCell>
        <SC.CounterText>{!counter.is_automatic ? 'нет' : 'да'}</SC.CounterText>
      </SC.CounterCell>
      <SC.CounterCell>
        <SC.CounterText>{counter.initial_values[0]}</SC.CounterText>
      </SC.CounterCell>
      <SC.CounterCell>
        <SC.CounterText>{addressLine}</SC.CounterText>
      </SC.CounterCell>
      <SC.CounterCell>
        <SC.CounterText $gray={true}>{counter.description}</SC.CounterText>
        <SC.DeleteButtonContainer onClick={deleteCounter}>
          <DeleteButton />
        </SC.DeleteButtonContainer>
      </SC.CounterCell>
    </SC.CounterContainer>
  );
};

export default CounterItem;
