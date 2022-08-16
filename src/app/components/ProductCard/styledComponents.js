import styled from 'styled-components'

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton
} from '../Button/styledComponents'

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    position: absolute;
    width: 80%;
    opacity: 0.7;
    top: 255px;

    &:hover {
      opacity: 0.85;
      display: flex;
    }
  }
`


  
export const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.8;
  }
`

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

export const Price = styled.span`
  width: 10%;
`