import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorld } from './HelloWorldApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>,
)
