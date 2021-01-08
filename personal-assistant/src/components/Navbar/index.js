import React from 'react'
import { Container, NavLink } from './styles'

const Navbar = ({children}) => (
  <>
    <Container>
      <NavLink to="/">Weather</NavLink>
      <NavLink to="/alltodo">Todos</NavLink>
    </Container>
    {children}
  </>
)

export default Navbar
