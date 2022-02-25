import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'

import { SliderContextProvider } from './contexts/slider'

ReactDOM.render(
  <React.StrictMode>
    <SliderContextProvider>
      <App />
    </SliderContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
