import React, { FC } from 'react';
import * as SC from './HeaderStyled';
import { columnCells } from './common';

const Header: FC = () => {
  return (
    <SC.HeaderContainer>
      {columnCells.map((cell, index) => (
        <SC.CellTitle key={cell} $center={index === 0}>
          {cell}
        </SC.CellTitle>
      ))}
    </SC.HeaderContainer>
  );
};

export default Header;
