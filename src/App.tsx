import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import AppProvider from './context/AppCtx'
import * as Routes from './routes'

const App = () => {
  return (
    <div className="App">
      <Router>
        <AppProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Routes.Home} />
            <Route path="*" component={Routes.NotFound} />
          </Switch>
        </AppProvider>
      </Router>
    </div>
  )
}

export default App
