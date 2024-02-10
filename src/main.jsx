import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorld } from './HelloWorldApp'
import { Counter } from './CounterApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld name="Cristhian" />
    <Counter value={1} />
  </React.StrictMode>,
)
