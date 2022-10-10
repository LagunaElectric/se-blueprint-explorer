import React from 'react'
import logo from './logo.svg'
import { store } from './app/store'
import BlueprintLoader from './components/BlueprintLoader/BlueprintLoader'
import './App.css'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <BlueprintLoader />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  )
}

export default App
