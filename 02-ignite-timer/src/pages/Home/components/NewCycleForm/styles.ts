import { Minus, Plus } from 'phosphor-react'
import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  
  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  @media (max-width: 768px) {
    width: 85%;
    text-align: center;
  }

  @media (max-width: 550px) {
    width: 75%;
    text-align: center;
  }

  @media (max-width: 452px) {
    width: 75%;
    text-align: center;
  }

  @media (max-width: 360px) {
    width: 75%;
    text-align: center;
  }
`

export const WrapperMinutesAmount = styled.div`
  position: relative;
  width: 4.225rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MinusIcon = styled(Minus).attrs(props => ({
  size: '14px', 
  color: props.theme['gray-500']
}))`
  position: absolute;
  left: 4.5px;
  cursor: pointer;
`

export const PlusIcon = styled(Plus).attrs(props => ({
  size: '14px', 
  color: props.theme['gray-500']
}))`
  position: absolute;
  right: 4.5px;
  cursor: pointer;
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4.625rem;
  text-align: center;
    /* esconde os botões padrão */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`