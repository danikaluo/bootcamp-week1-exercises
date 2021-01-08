import styled from 'styled-components'

export const Button = styled.button`
  height: 24px;
  width: 140px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 14px;
  background: ${({ theme }) => theme.colors.layout.accent};
  color: ${({ theme }) => theme.colors.fonts.button};
  border: none;
  border-radius: 2px;

  &:hover {
    background: ${({ theme }) => theme.colors.layout.darkAccent};
    cursor: pointer;
  }
`
export const TodosList = styled.ul`
  list-style: none;
  flex: 1;
`

