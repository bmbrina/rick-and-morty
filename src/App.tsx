import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AppProvider from './context/AppCtx'
import * as Routes from './routes'

const App = () => {
  return (
    <div className="App">
      <Router basename="/rick-and-morty">
        <AppProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Routes.Home} />
            <Route path="*" component={Routes.NotFound} />
          </Switch>
          <Footer />
        </AppProvider>
      </Router>
    </div>
  )
}

export default App
