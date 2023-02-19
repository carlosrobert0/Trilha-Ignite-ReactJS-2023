import styled from "styled-components"

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    font-size: 8rem;
    line-height: 6rem;
    color: ${({ theme }) => theme['gray-100']};

    display: flex;
    gap: 0.7rem;

    span {
      background: ${({ theme }) => theme['gray-700']};
      padding: 2rem 1rem;
      border-radius: 4px;
    }
  }

  @media (max-width: 550px) {
    font-size: 6rem;
    line-height: 4rem;
    color: ${({ theme }) => theme['gray-100']};

    display: flex;
    gap: 0.5rem;

    span {
      background: ${({ theme }) => theme['gray-700']};
      padding: 2rem 1rem;
      border-radius: 4px;
    }
  }

  @media (max-width: 452px) {
    font-size: 4rem;
    line-height: 3rem;
    color: ${({ theme }) => theme['gray-100']};

    display: flex;
    gap: 0.2rem;

    span {
      background: ${({ theme }) => theme['gray-700']};
      padding: 2rem 1rem;
      border-radius: 4px;
    }
  }

  @media (max-width: 360px) {
    font-size: 3rem;
    line-height: 3rem;
    color: ${({ theme }) => theme['gray-100']};

    display: flex;
    gap: 0.2rem;

    span {
      background: ${({ theme }) => theme['gray-700']};
      padding: 2rem 1rem;
      border-radius: 4px;
    }
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`