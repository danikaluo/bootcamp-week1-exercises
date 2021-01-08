import React from 'react';
import {ThemeProvider} from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import theme from './theme'
import Navbar from './components/Navbar'
import AllTodo from './containers/AllTodo';
import Weather from './containers/Weather';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navbar>
        <Switch>
          <Route path='/alltodo' component={AllTodo}/>
          <Route path='/' component={Weather}/>
        </Switch>
      </Navbar>
    </BrowserRouter>
  </ThemeProvider>
)

export default App;
