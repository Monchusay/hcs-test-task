import React from 'react';
import * as SC from './DeleteButtonStyled';
import IconDelete from '../../shared/icons/IconDelete';
const DeleteButton = () => {
  return (
    <SC.ButtonContainer>
      <IconDelete />
    </SC.ButtonContainer>
  );
};

export default DeleteButton;
