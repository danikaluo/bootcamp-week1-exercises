import styled from 'styled-components'

export const Input = styled.div`
  height: 24px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-weight: ${({ theme }) => theme.fonts.body.weight};
  font-size: 18px;
  border: none;
  background: ${({ theme }) => theme.colors.layout.secondary};
  border-radius: 2px;
  padding-left: 10px;
  margin-top: 10px;
`
