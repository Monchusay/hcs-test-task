import React, { FC } from 'react';
import { CounterType } from '../../../../app/models/CounterModel';
import * as SC from './CounterItemStyled';
import { counterIsAutomaticMapping, counterTypesMapping } from './common';
import DeleteButton from '../../../../widgets/deleteButton/DeleteButton';

type CounterItemPropsType = {
  counter: CounterType;
  deleteCounter: () => void;
};
const CounterItem: FC<CounterItemPropsType> = (props) => {
  const { counter, deleteCounter } = props;

  return (
    <SC.CounterContainer>
      <SC.CounterCell $center={true}>
        <SC.CounterText>{counter.id}</SC.CounterText>
      </SC.CounterCell>
      <SC.CounterCell>
        {counterTypesMapping[counter._type].icon}
        <SC.CounterText>
          {counterTypesMapping[counter._type].text}
        </SC.CounterText>
      </SC.CounterCell>
      <SC.CounterCell>
        <SC.CounterText>
          {counter.area.installation_date as never}
        </SC.CounterText>
      </SC.CounterCell>
      <SC.CounterCell>
        <SC.CounterText>
          {counterIsAutomaticMapping[counter.area.is_automatic.toString()]}
        </SC.CounterText>
      </SC.CounterCell>
      <SC.CounterCell>
        <SC.CounterText>{counter.area.initial_values[0]}</SC.CounterText>
      </SC.CounterCell>
      <SC.CounterCell>
        <SC.CounterText>{counter.area.id}</SC.CounterText>
      </SC.CounterCell>
      <SC.CounterCell>
        <SC.CounterText>{counter.area.description}</SC.CounterText>
        <SC.DeleteButtonContainer onClick={deleteCounter}>
          <DeleteButton />
        </SC.DeleteButtonContainer>
      </SC.CounterCell>
    </SC.CounterContainer>
  );
};

export default CounterItem;
