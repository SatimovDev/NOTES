import React from 'react'
import styled from 'styled-components'
import { Red } from '../style/GlobalStyle'

export const Add = ( {setIsOpenModal} ) => {
  return <AddStyle onClick={() => setIsOpenModal(true)}> + </AddStyle>
  
};

const AddStyle = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 58px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background: ${Red};
    border: none;
    color: #fff;
    transition: 200ms ease-in-out;
    font-size: 40px;
    &:hover{
        transform: scale(1.2);
    }
`