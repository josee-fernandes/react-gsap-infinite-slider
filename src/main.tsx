import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'

import { ShowcaseContextProvider } from './contexts/showcase'

ReactDOM.render(
  <React.StrictMode>
    <ShowcaseContextProvider>
      <App />
    </ShowcaseContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
