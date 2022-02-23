import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

import { worker } from './api/server'

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
  // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' })

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <footer>
          <p style={{ textAlign: 'center', backgroundColor: '#764abc', color: 'white', marginTop: "2em" }}>Author: <a href='https://github.com/yasen002'>Yasen A</a> </p>
        </footer>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

start()
