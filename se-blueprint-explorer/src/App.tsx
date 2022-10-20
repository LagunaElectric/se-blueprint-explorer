import React from 'react'
import logo from './logo.svg'
import { store } from './app/store'
import './App.css'
import { Provider } from 'react-redux'
import BlueprintViewer from './components/BlueprintViewer/BlueprintViewer'

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <BlueprintViewer />
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
