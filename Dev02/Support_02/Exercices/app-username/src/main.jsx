import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

// je récupère le store global où j'ai tous mes createSlices
import store from './store.jsx'

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/**  contextualiser le store pour tout l'arbre de React */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
